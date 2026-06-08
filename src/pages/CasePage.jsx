import { ArrowLeft, FolderOpen, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
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
import { ProgressBar } from "../components/ui/ProgressBar.jsx";
import {
  canMakeDeduction,
  getDemoQuestionPool,
  getProgress,
  getUnlockedClues
} from "../services/gameEngine.js";

export function CasePage({ caseData, onBack, onSolved }) {
  const [languageMode, setLanguageMode] = useState("bilingual");
  const [activeWord, setActiveWord] = useState(null);
  const [activeResult, setActiveResult] = useState(null);
  const [caseFileTab, setCaseFileTab] = useState("clues");
  const [isCaseFileOpen, setIsCaseFileOpen] = useState(false);
  const [isNickOpen, setIsNickOpen] = useState(false);
  const [isTruthOpen, setIsTruthOpen] = useState(false);
  const [nickIntroduced, setNickIntroduced] = useState(false);
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);
  const [usedQuestionIds, setUsedQuestionIds] = useState(() => new Set());
  const [answers, setAnswers] = useState([]);

  const questionPool = useMemo(() => getDemoQuestionPool(caseData), [caseData]);
  const clues = useMemo(() => getUnlockedClues(caseData, usedQuestionIds), [caseData, usedQuestionIds]);
  const progress = useMemo(
    () => getProgress(caseData, usedQuestionIds, false, questionPool),
    [caseData, questionPool, usedQuestionIds]
  );
  const vocabularyLookup = useMemo(() => createVocabularyLookup(caseData.vocabulary), [caseData.vocabulary]);
  const visibleQuestions = useMemo(
    () => questionPool.filter((question) => !usedQuestionIds.has(question.id)).slice(0, 4),
    [questionPool, usedQuestionIds]
  );
  const deductionReady = canMakeDeduction(caseData, usedQuestionIds, questionPool);

  function askQuestion(question) {
    if (usedQuestionIds.has(question.id)) {
      return;
    }

    const unlockedBefore = new Set(clues.map((clue) => clue.id));
    const newClues = (caseData.clues ?? []).filter(
      (clue) => (question.unlockClues ?? []).includes(clue.id) && !unlockedBefore.has(clue.id)
    );
    const entry = { question, askedAt: Date.now(), newClues };

    setUsedQuestionIds((current) => {
      const next = new Set(current);
      next.add(question.id);
      return next;
    });
    setAnswers((current) => [...current, entry]);
    setActiveResult(entry);
  }

  function openTruthModal() {
    if (!deductionReady) {
      return;
    }

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
        <ProgressBar value={progress} />
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
        onClose={() => setActiveResult(null)}
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
        onClose={() => setIsTruthOpen(false)}
        onSolved={onSolved}
        selectedChoiceId={selectedChoiceId}
        setSelectedChoiceId={setSelectedChoiceId}
      />
      <InvestigationNotesModal word={activeWord} onClose={() => setActiveWord(null)} />
    </main>
  );
}
