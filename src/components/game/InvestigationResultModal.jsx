import { ArrowRight, FilePlus2 } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Modal } from "../ui/Modal.jsx";
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

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Investigation Result">
      {entry ? (
        <div className="investigation-result">
          <section>
            <p className="eyebrow">Question</p>
            <LocalizedText
              value={entry.question.text}
              languageMode={languageMode}
              onWordClick={onWordClick}
              vocabularyLookup={vocabularyLookup}
            />
          </section>
          <section>
            <p className="eyebrow">Answer</p>
            <LocalizedText
              value={entry.question.answer}
              languageMode={languageMode}
              onWordClick={onWordClick}
              vocabularyLookup={vocabularyLookup}
            />
          </section>
          {newClues.length > 0 ? (
            <div className="new-clue-callout is-unlocked">
              <FilePlus2 aria-hidden="true" size={18} />
              <div>
                <strong>New Clue Added To Case File</strong>
                <span>
                  {newClues.length} {newClues.length === 1 ? "clue" : "clues"} added
                </span>
              </div>
            </div>
          ) : null}
          <div className="modal-actions">
            <Button icon={ArrowRight} onClick={onClose}>
              Continue
            </Button>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
