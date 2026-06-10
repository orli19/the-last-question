import { Check, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card } from "../ui/Card.jsx";
import { LocalizedText } from "./LocalizedText.jsx";

const initialQuestionLabels = [
  {
    en: "Was the soup poisonous?",
    zh: "这碗汤有毒吗？"
  },
  {
    en: "Did the man know what turtle soup tasted like?",
    zh: "这个男人以前知道海龟汤是什么味道吗？"
  },
  {
    en: "Was this his first time ordering turtle soup in a restaurant?",
    zh: "这是他第一次在餐厅点海龟汤吗？"
  },
  {
    en: "Had he once survived a disaster at sea?",
    zh: "他曾经在海难中幸存下来吗？"
  },
  {
    en: "Was he once stranded with other people?",
    zh: "他当时是和其他人一起被困的吗？"
  },
  {
    en: "Did someone lie to him during that disaster?",
    zh: "在那场灾难中，有人对他说谎了吗？"
  },
  {
    en: "Was the soup he tasted in the restaurant different from what he remembered?",
    zh: "餐厅里的海龟汤和他记忆中的味道不同吗？"
  },
  {
    en: "Did he realize that what he ate before was not turtle soup?",
    zh: "他意识到自己以前吃的并不是海龟汤了吗？"
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
