import { useEffect, useMemo, useRef, useState } from "react";
import { checkFinalChoice } from "../../services/gameEngine.js";
import { playCaseClose, playWrongAnswer } from "../../services/audioManager.js";
import { LocalizedText } from "./LocalizedText.jsx";

export function SubmitTruthModal({
  caseData,
  isOpen,
  languageMode,
  onBackToArchive,
  onClose,
  selectedChoiceId,
  setSelectedChoiceId
}) {
  const [wrongChoiceId, setWrongChoiceId] = useState(null);
  const [isSolved, setIsSolved] = useState(false);
  const wrongTimerRef = useRef(null);
  const choices = useMemo(() => (caseData.finalChoices ?? []).slice(0, 4), [caseData.finalChoices]);
  const selectedChoice = choices.find((choice) => choice.id === selectedChoiceId);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setWrongChoiceId(null);
    setIsSolved(false);
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (wrongTimerRef.current) {
        window.clearTimeout(wrongTimerRef.current);
      }
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  function markWrong(choiceId) {
    setWrongChoiceId(null);
    if (wrongTimerRef.current) {
      window.clearTimeout(wrongTimerRef.current);
    }

    wrongTimerRef.current = window.setTimeout(() => {
      setWrongChoiceId(choiceId);
    }, 0);
  }

  function resolveChoice(choice) {
    setSelectedChoiceId(choice.id);

    if (checkFinalChoice(choice)) {
      if (wrongTimerRef.current) {
        window.clearTimeout(wrongTimerRef.current);
      }
      setWrongChoiceId(null);
      playCaseClose();
      setIsSolved(true);
      return;
    }

    setIsSolved(false);
    playWrongAnswer();
    markWrong(choice.id);
  }

  function submitChoice() {
    if (!selectedChoice) {
      return;
    }

    resolveChoice(selectedChoice);
  }

  return (
    <>
      {isSolved ? <div className="case-solved-stamp">CASE SOLVED</div> : null}
      <section
        aria-label="Final deduction"
        aria-modal="false"
        className={["final-deduction-sheet", isSolved ? "is-solved" : ""].filter(Boolean).join(" ")}
        role="dialog"
      >
        <span className="final-deduction-corner final-deduction-corner--tl" aria-hidden="true" />
        <span className="final-deduction-corner final-deduction-corner--tr" aria-hidden="true" />
        <span className="final-deduction-corner final-deduction-corner--br" aria-hidden="true" />
        <span className="final-deduction-corner final-deduction-corner--bl" aria-hidden="true" />

        <header className="final-deduction-header">
          <p>FINAL DEDUCTION</p>
          <span>Tell Nick what really happened.</span>
        </header>

        <div className="truth-options final-deduction-options">
          {choices.map((choice) => {
            const isSelected = selectedChoiceId === choice.id;
            const isCorrectSelected = isSolved && isSelected && choice.isCorrect;
            const isWrongSelected = wrongChoiceId === choice.id;

            return (
              <button
                key={choice.id}
                className={[
                  "truth-choice",
                  "final-deduction-choice",
                  isSelected ? "is-active" : "",
                  isCorrectSelected ? "is-correct" : "",
                  isWrongSelected ? "is-wrong" : ""
                ]
                  .filter(Boolean)
                  .join(" ")}
                type="button"
                onClick={() => resolveChoice(choice)}
              >
                <LocalizedText value={choice.text} languageMode={languageMode} />
              </button>
            );
          })}
        </div>

        {isSolved ? (
          <div className="final-deduction-actions">
            <button type="button" onClick={onBackToArchive}>
              [ BACK TO ARCHIVE ]
            </button>
            <button type="button" onClick={onClose}>
              [ REVIEW CASE ]
            </button>
          </div>
        ) : (
          <button
            className="final-deduction-submit"
            disabled={!selectedChoice}
            type="button"
            onClick={submitChoice}
          >
            Submit Deduction
          </button>
        )}
      </section>
    </>
  );
}
