import { MessageCircleQuestion } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card } from "../ui/Card.jsx";
import { LocalizedText } from "./LocalizedText.jsx";

export function QuestionSystem({
  languageMode,
  canDeduce,
  onAskQuestion,
  onMakeDeduction,
  onWordClick,
  questionCount,
  usedQuestionIds,
  visibleQuestions,
  vocabularyLookup
}) {
  return (
    <Card className="question-system">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Question Pool</p>
          <h2>Choose your next question</h2>
        </div>
        <div className="question-system__tools">
          <span className="mini-count">
            {usedQuestionIds.size}/{questionCount}
          </span>
        </div>
      </div>
      <div className="question-list current-questions">
        {visibleQuestions.map((question) => (
          <Button key={question.id} icon={MessageCircleQuestion} onClick={() => onAskQuestion(question)} variant="question">
            <span>
              <LocalizedText
                value={question.text}
                languageMode={languageMode}
                onWordClick={onWordClick}
                vocabularyLookup={vocabularyLookup}
              />
            </span>
          </Button>
        ))}
        {visibleQuestions.length === 0 ? <p className="empty-state">All questions investigated.</p> : null}
      </div>
      <div className="deduction-cta">
        <Button disabled={!canDeduce} onClick={onMakeDeduction}>
          Make Deduction
        </Button>
        {!canDeduce ? <p>Collect more clues before making a deduction.</p> : <p>Ready to deduce.</p>}
      </div>
    </Card>
  );
}
