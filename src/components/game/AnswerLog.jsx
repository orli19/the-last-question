import { Card } from "../ui/Card.jsx";
import { LocalizedText } from "./LocalizedText.jsx";

export function AnswerLog({ answers, languageMode, onWordClick, showHeading = true, vocabularyLookup }) {
  return (
    <Card className="answer-log">
      {showHeading ? (
        <div className="section-heading">
          <div>
            <p className="eyebrow">Investigation History</p>
            <h2>Previous results</h2>
          </div>
        </div>
      ) : null}
      {answers.length === 0 ? (
        <p className="empty-state">No questions asked yet.</p>
      ) : (
        <ol className="timeline">
          {answers.map((entry) => (
            <li key={entry.question.id}>
              <LocalizedText
                value={entry.question.text}
                languageMode={languageMode}
                as="h3"
                onWordClick={onWordClick}
                vocabularyLookup={vocabularyLookup}
              />
              <LocalizedText
                value={entry.question.answer}
                languageMode={languageMode}
                onWordClick={onWordClick}
                vocabularyLookup={vocabularyLookup}
              />
            </li>
          ))}
        </ol>
      )}
    </Card>
  );
}
