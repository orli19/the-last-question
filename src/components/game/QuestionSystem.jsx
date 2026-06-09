import { Check, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card } from "../ui/Card.jsx";
import { LocalizedText } from "./LocalizedText.jsx";

const initialQuestionLabels = [
  {
    en: "Who returned the book?",
    zh: "是谁归还了这本书？"
  },
  {
    en: "What was unusual about the book?",
    zh: "这本书有什么异常？"
  },
  {
    en: "Why did the librarian call the police so quickly?",
    zh: "为什么图书管理员这么快就报了警？"
  },
  {
    en: "What happened right before the book was returned?",
    zh: "这本书被归还前发生了什么？"
  }
];

export function QuestionSystem({
  languageMode,
  canDeduce,
  onAskQuestion,
  onMakeDeduction,
  onWordClick,
  investigatingQuestionId,
  questionCount,
  usedQuestionIds,
  visibleQuestions,
  vocabularyLookup
}) {
  const shouldUseInitialLabels = visibleQuestions.length <= initialQuestionLabels.length;

  return (
    <Card className={["question-system", shouldUseInitialLabels ? "is-initial" : ""].filter(Boolean).join(" ")}>
      <div className="case-question-title" aria-label="What would you like to ask?">
        <span aria-hidden="true" />
        <h2>What would you like to ask?</h2>
        <span aria-hidden="true" />
      </div>
      <div className="question-list current-questions">
        {visibleQuestions.map((question, index) => {
          const isInvestigating = investigatingQuestionId === question.id;
          const isInvestigated = usedQuestionIds.has(question.id);
          const classes = [
            "terminal-question-button",
            isInvestigating ? "is-investigating" : "",
            isInvestigated ? "is-investigated" : ""
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <Button
              aria-busy={isInvestigating}
              className={classes}
              key={question.id}
              onClick={() => onAskQuestion(question)}
              variant="question"
            >
              <span>
                {shouldUseInitialLabels && initialQuestionLabels[index] ? (
                  <span className="terminal-question-copy">
                    <span>{initialQuestionLabels[index].en}</span>
                    {languageMode === "bilingual" ? (
                      <span className="terminal-question-zh">{initialQuestionLabels[index].zh}</span>
                    ) : null}
                  </span>
                ) : (
                  <LocalizedText
                    value={question.text}
                    languageMode={languageMode}
                    onWordClick={onWordClick}
                    vocabularyLookup={vocabularyLookup}
                  />
                )}
              </span>
              {isInvestigating ? (
                <span className="terminal-question-loading" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              ) : isInvestigated ? (
                <Check className="terminal-question-check" aria-hidden="true" size={18} strokeWidth={2} />
              ) : (
                <ChevronRight className="terminal-question-arrow" aria-hidden="true" size={24} strokeWidth={1.8} />
              )}
            </Button>
          );
        })}
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
