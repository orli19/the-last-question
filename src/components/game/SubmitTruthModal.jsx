import { CheckCircle2 } from "lucide-react";
import { checkFinalChoice } from "../../services/gameEngine.js";
import { Button } from "../ui/Button.jsx";
import { Modal } from "../ui/Modal.jsx";
import { LocalizedText } from "./LocalizedText.jsx";

export function SubmitTruthModal({
  caseData,
  isOpen,
  languageMode,
  onClose,
  onSolved,
  selectedChoiceId,
  setSelectedChoiceId
}) {
  const selectedChoice = (caseData.finalChoices ?? []).find((choice) => choice.id === selectedChoiceId);

  function submitChoice() {
    if (!selectedChoice) {
      return;
    }

    if (checkFinalChoice(selectedChoice)) {
      onSolved();
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="What Really Happened?">
      <div className="truth-options">
        {(caseData.finalChoices ?? []).map((choice) => {
          const isSelected = selectedChoiceId === choice.id;
          const isWrongSelected = isSelected && selectedChoice && !selectedChoice.isCorrect;
          return (
            <button
              key={choice.id}
              className={[
                "truth-choice",
                isSelected ? "is-active" : "",
                isWrongSelected ? "is-wrong" : ""
              ]
                .filter(Boolean)
                .join(" ")}
              type="button"
              onClick={() => setSelectedChoiceId(choice.id)}
            >
              <LocalizedText value={choice.text} languageMode={languageMode} />
            </button>
          );
        })}
      </div>
      {selectedChoice ? (
        <div className={["truth-feedback", selectedChoice.isCorrect ? "is-correct" : "is-wrong"].join(" ")}>
          <LocalizedText value={selectedChoice.feedback} languageMode={languageMode} />
        </div>
      ) : null}
      <div className="modal-actions">
        <Button variant="ghost" onClick={onClose}>
          Keep Investigating
        </Button>
        <Button icon={CheckCircle2} disabled={!selectedChoice} onClick={submitChoice}>
          Make Deduction
        </Button>
      </div>
    </Modal>
  );
}
