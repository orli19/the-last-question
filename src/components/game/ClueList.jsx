import { FileText, LockKeyhole } from "lucide-react";
import { Card } from "../ui/Card.jsx";
import { LocalizedText } from "./LocalizedText.jsx";

export function ClueList({
  clues,
  totalClues,
  languageMode,
  onWordClick,
  showHeading = true,
  showHeadingTitle = true,
  vocabularyLookup
}) {
  return (
    <Card className="clue-list">
      {showHeading ? (
        <div className="section-heading">
          <div>
            <p className="eyebrow">Unlocked Clues</p>
            {showHeadingTitle ? <h2>Case File</h2> : null}
          </div>
          <span className="mini-count">
            {clues.length}/{totalClues}
          </span>
        </div>
      ) : null}
      {clues.length === 0 ? (
        <div className="empty-with-icon">
          <LockKeyhole aria-hidden="true" size={20} />
          <p>No clues unlocked yet.</p>
        </div>
      ) : (
        <ul className="clues">
          {clues.map((clue, index) => (
            <li key={clue.id} className="is-unlocked">
              <div className="clue-label">
                <FileText aria-hidden="true" size={17} />
                <span>Clue {String(index + 1).padStart(2, "0")}</span>
              </div>
              <LocalizedText
                value={clue.text}
                languageMode={languageMode}
                onWordClick={onWordClick}
                vocabularyLookup={vocabularyLookup}
              />
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
