import { playSound } from "../../services/audioManager.js";
import { LocalizedText } from "./LocalizedText.jsx";

export function InvestigationResultModal({
  entry,
  isOpen,
  languageMode,
  onClose,
  onWordClick,
  vocabularyLookup
}) {
  const newClues = entry?.newClues ?? [];

  if (!isOpen || !entry) {
    return null;
  }

  function closeWithSound() {
    playSound("click");
    onClose();
  }

  return (
    <section
      aria-label="Nick answer"
      aria-modal="false"
      className="nick-answer-sheet is-entering"
      role="dialog"
    >
      <span className="nick-answer-corner nick-answer-corner--tl" aria-hidden="true" />
      <span className="nick-answer-corner nick-answer-corner--tr" aria-hidden="true" />
      <span className="nick-answer-corner nick-answer-corner--br" aria-hidden="true" />
      <span className="nick-answer-corner nick-answer-corner--bl" aria-hidden="true" />

      {newClues.length > 0 ? (
        <div className="nick-new-clue-stamp" aria-label="New clue evidence added">
          NEW CLUE
        </div>
      ) : null}

      <div className="nick-answer-header">
        <strong>Detective Nick</strong>
      </div>

      <div className="nick-answer-copy">
        <LocalizedText
          value={entry.question.answer}
          languageMode={languageMode}
          onWordClick={onWordClick}
          vocabularyLookup={vocabularyLookup}
        />
      </div>

      <button className="nick-answer-continue" type="button" onClick={closeWithSound}>
        CONTINUE &gt;
      </button>
    </section>
  );
}
