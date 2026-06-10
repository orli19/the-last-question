import { ArrowLeft, FolderOpen, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnswerLog } from "../components/game/AnswerLog.jsx";
import { AskNickModal } from "../components/game/AskNickModal.jsx";
import { createVocabularyLookup } from "../components/game/ClickableText.jsx";
import { ClueList } from "../components/game/ClueList.jsx";
import { InvestigationNotesModal } from "../components/game/InvestigationNotesModal.jsx";
import { InvestigationResultModal } from "../components/game/InvestigationResultModal.jsx";
import { LanguageToggle } from "../components/game/LanguageToggle.jsx";
import { PromptPanel } from "../components/game/PromptPanel.jsx";
import { QuestionSystem } from "../components/game/QuestionSystem.jsx";
import { SubmitTruthModal } from "../components/game/SubmitTruthModal.jsx";
import { Button } from "../components/ui/Button.jsx";
import { Modal } from "../components/ui/Modal.jsx";
import {
  getAllQuestions,
  getUnlockedClues
} from "../services/gameEngine.js";
import { playQuestionClick, playSound } from "../services/audioManager.js";

export function CasePage({ caseData, onArchiveSolved, onBack }) {
  const [languageMode, setLanguageMode] = useState("english");
  const [activeWord, setActiveWord] = useState(null);
  const [activeResult, setActiveResult] = useState(null);
  const [caseFileTab, setCaseFileTab] = useState("clues");
  const [isCaseFileOpen, setIsCaseFileOpen] = useState(false);
  const [isNickOpen, setIsNickOpen] = useState(false);
  const [isTruthOpen, setIsTruthOpen] = useState(false);
  const [nickIntroduced, setNickIntroduced] = useState(false);
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);
  const [usedQuestionIds, setUsedQuestionIds] = useState(() => new Set());
  const [investigatingQuestionId, setInvestigatingQuestionId] = useState(null);
  const [answers, setAnswers] = useState([]);
  const investigationTimerRef = useRef(null);

  const questionPool = useMemo(() => getAllQuestions(caseData), [caseData]);
  const clues = useMemo(() => getUnlockedClues(caseData, usedQuestionIds), [caseData, usedQuestionIds]);
  const vocabularyLookup = useMemo(() => createVocabularyLookup(caseData.vocabulary), [caseData.vocabulary]);
  const visibleQuestions = questionPool;
  const currentRoundClueIds = useMemo(
    () => new Set(visibleQuestions.flatMap((question) => question.unlockClues ?? [])),
    [visibleQuestions]
  );
  const unlockedClueIds = useMemo(() => new Set(clues.map((clue) => clue.id)), [clues]);
  const currentRoundComplete =
    visibleQuestions.length > 0 && visibleQuestions.every((question) => usedQuestionIds.has(question.id));
  const currentRoundCluesFound = [...currentRoundClueIds].every((clueId) => unlockedClueIds.has(clueId));
  const deductionReady = currentRoundComplete && currentRoundCluesFound;

  useEffect(() => {
    return () => {
      if (investigationTimerRef.current) {
        window.clearTimeout(investigationTimerRef.current);
      }
    };
  }, []);

  function askQuestion(question) {
    if (investigatingQuestionId || activeResult) {
      return;
    }

    playQuestionClick();
    const unlockedBefore = new Set(clues.map((clue) => clue.id));
    const newClues = (caseData.clues ?? []).filter(
      (clue) => (question.unlockClues ?? []).includes(clue.id) && !unlockedBefore.has(clue.id)
    );
    const existingEntry = answers.find((answer) => answer.question.id === question.id);
    const entry = existingEntry
      ? { ...existingEntry, askedAt: Date.now(), newClues: [] }
      : { question, askedAt: Date.now(), newClues };

    setInvestigatingQuestionId(question.id);
    investigationTimerRef.current = window.setTimeout(() => {
      setInvestigatingQuestionId(null);
      setActiveResult(entry);
    }, 500);
  }

  function closeInvestigationResult() {
    if (activeResult && !usedQuestionIds.has(activeResult.question.id)) {
      setUsedQuestionIds((current) => {
        const next = new Set(current);
        next.add(activeResult.question.id);
        return next;
      });
      setAnswers((current) => [...current, activeResult]);
    }

    setActiveResult(null);
  }

  function openTruthModal() {
    if (!deductionReady) {
      return;
    }

    playSound("click");
    setSelectedChoiceId(null);
    setIsTruthOpen(true);
  }

  return (
    <main className="app-shell case-page">
      <header className="case-header">
        <button aria-label="Back" className="icon-button case-back-button" type="button" onClick={onBack}>
          <ArrowLeft aria-hidden="true" size={24} strokeWidth={2.4} />
        </button>
        <LanguageToggle languageMode={languageMode} onChange={setLanguageMode} />
      </header>

      <div className="case-layout">
        <div className="case-layout__main">
          <PromptPanel
            caseData={caseData}
            languageMode={languageMode}
            onWordClick={setActiveWord}
            vocabularyLookup={vocabularyLookup}
          />
          <div>
            <QuestionSystem
              canDeduce={deductionReady}
              languageMode={languageMode}
              onAskQuestion={askQuestion}
              onMakeDeduction={openTruthModal}
              onWordClick={setActiveWord}
              investigatingQuestionId={investigatingQuestionId}
              questionCount={questionPool.length}
              usedQuestionIds={usedQuestionIds}
              visibleQuestions={visibleQuestions}
              vocabularyLookup={vocabularyLookup}
            />
          </div>
        </div>
        <aside className="case-layout__side">
          <ClueList
            clues={clues}
            totalClues={(caseData.clues ?? []).length}
            languageMode={languageMode}
            onWordClick={setActiveWord}
            vocabularyLookup={vocabularyLookup}
          />
          <AnswerLog
            answers={answers}
            languageMode={languageMode}
            onWordClick={setActiveWord}
            vocabularyLookup={vocabularyLookup}
          />
          <Button icon={MessageCircle} onClick={() => setIsNickOpen(true)} variant="secondary">
            Assistant
          </Button>
        </aside>
      </div>

      <div className="case-terminal-footer" aria-label="Case information">
        {caseData.caseNumber.toUpperCase()} <span aria-hidden="true">|</span> {caseData.title.en.toUpperCase()}
      </div>

      {deductionReady && !activeResult && !isTruthOpen ? (
        <div className="case-deduction-dock">
          <Button className="case-deduction-button" onClick={openTruthModal}>
            Make Deduction
          </Button>
        </div>
      ) : null}

      <nav className="mobile-case-nav" aria-label="Investigation tools">
        <button type="button" onClick={() => setIsCaseFileOpen(true)}>
          <FolderOpen aria-hidden="true" size={19} />
          <span>Case File</span>
        </button>
        <button type="button" onClick={() => setIsNickOpen(true)}>
          <MessageCircle aria-hidden="true" size={19} />
          <span>Assistant</span>
        </button>
      </nav>

      <InvestigationResultModal
        entry={activeResult}
        isOpen={Boolean(activeResult)}
        languageMode={languageMode}
        onClose={closeInvestigationResult}
        onWordClick={setActiveWord}
        vocabularyLookup={vocabularyLookup}
      />
      <Modal isOpen={isCaseFileOpen} onClose={() => setIsCaseFileOpen(false)} title="Case File" mode="sheet">
        <div className="case-file-tabs" role="tablist" aria-label="Case File sections">
          <button
            aria-selected={caseFileTab === "clues"}
            className={caseFileTab === "clues" ? "is-active" : ""}
            role="tab"
            type="button"
            onClick={() => setCaseFileTab("clues")}
          >
            Unlocked Clues
          </button>
          <button
            aria-selected={caseFileTab === "history"}
            className={caseFileTab === "history" ? "is-active" : ""}
            role="tab"
            type="button"
            onClick={() => setCaseFileTab("history")}
          >
            Question History
          </button>
        </div>
        {caseFileTab === "clues" ? (
          <ClueList
            clues={clues}
            totalClues={(caseData.clues ?? []).length}
            languageMode={languageMode}
            onWordClick={setActiveWord}
            showHeading={false}
            showHeadingTitle={false}
            vocabularyLookup={vocabularyLookup}
          />
        ) : (
          <AnswerLog
            answers={answers}
            languageMode={languageMode}
            onWordClick={setActiveWord}
            showHeading={false}
            vocabularyLookup={vocabularyLookup}
          />
        )}
      </Modal>
      <AskNickModal
        answerCount={answers.length}
        clueCount={clues.length}
        isOpen={isNickOpen}
        nickIntroduced={nickIntroduced}
        onClose={() => setIsNickOpen(false)}
        onIntroComplete={() => setNickIntroduced(true)}
      />
      <SubmitTruthModal
        caseData={caseData}
        isOpen={isTruthOpen}
        languageMode={languageMode}
        onBackToArchive={onArchiveSolved}
        onClose={() => setIsTruthOpen(false)}
        selectedChoiceId={selectedChoiceId}
        setSelectedChoiceId={setSelectedChoiceId}
      />
      <InvestigationNotesModal word={activeWord} onClose={() => setActiveWord(null)} />
    </main>
  );
}
