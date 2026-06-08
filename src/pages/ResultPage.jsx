import { ArrowLeft, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { createVocabularyLookup } from "../components/game/ClickableText.jsx";
import { InvestigationNotesModal } from "../components/game/InvestigationNotesModal.jsx";
import { LocalizedText } from "../components/game/LocalizedText.jsx";
import { Badge } from "../components/ui/Badge.jsx";
import { Button } from "../components/ui/Button.jsx";
import { Card } from "../components/ui/Card.jsx";

export function ResultPage({ caseData, isSolved, onBackHome, onReplay }) {
  const [activeWord, setActiveWord] = useState(null);
  const vocabularyLookup = useMemo(() => createVocabularyLookup(caseData.vocabulary), [caseData.vocabulary]);

  return (
    <main className="app-shell result-page">
      <header className="app-header result-header">
        <Badge tone="gold">{isSolved ? "Case Solved" : "Result"}</Badge>
        <h1>{caseData.title.en}</h1>
        <p>{caseData.title.zh}</p>
      </header>

      <div className="result-layout">
        <Card className="truth-card">
          <p className="eyebrow">Truth Analysis</p>
          <LocalizedText
            value={caseData.truth}
            languageMode="bilingual"
            onWordClick={setActiveWord}
            vocabularyLookup={vocabularyLookup}
          />
        </Card>

        <Card className="review-card">
          <p className="eyebrow">Vocabulary Review</p>
          {(caseData.reviewVocabulary ?? []).length === 0 ? (
            <p className="empty-state">No review vocabulary in placeholder data.</p>
          ) : (
            <ul className="review-list">
              {caseData.reviewVocabulary.map((item) => (
                <li key={typeof item === "string" ? item : item.id ?? item.word}>
                  <strong>{typeof item === "string" ? item : item.word}</strong>
                  {typeof item === "string" ? null : <span>{item.zh}</span>}
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card className="review-card">
          <p className="eyebrow">Useful Expressions</p>
          {(caseData.usefulExpressions ?? []).length === 0 ? (
            <p className="empty-state">No useful expressions in placeholder data.</p>
          ) : (
            <ul className="review-list">
              {caseData.usefulExpressions.map((item) => (
                <li key={item.id ?? item.en}>
                  <strong>{item.en}</strong>
                  <span>{item.zh}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      <div className="result-actions">
        <Button icon={RotateCcw} onClick={onReplay} variant="secondary">
          Replay Case
        </Button>
        <Button icon={ArrowLeft} onClick={onBackHome}>
          Back To Home
        </Button>
      </div>
      <InvestigationNotesModal word={activeWord} onClose={() => setActiveWord(null)} />
    </main>
  );
}
