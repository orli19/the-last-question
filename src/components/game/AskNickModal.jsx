import { MessagesSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button.jsx";
import { Modal } from "../ui/Modal.jsx";

const introSlides = [
  {
    lines: ["......", "Finally. Someone clicked me.", "Do not misunderstand. I am not the killer."],
    action: "Continue"
  },
  {
    lines: ["I am Nick.", "Strictly speaking,", "I am your investigation partner."],
    action: "Continue"
  },
  {
    lines: ["You ask questions.", "I remind you when your logic wanders off.", "Deal?"],
    action: "Deal"
  }
];

function getNickHint(answerCount, clueCount) {
  if (clueCount >= 8) {
    return [
      "Level 3",
      "If the police did not find the book,",
      "why did it appear six months later?",
      "I support bold reasoning. Not baseless guessing."
    ];
  }

  if (clueCount >= 4) {
    return [
      "Level 2",
      "The borrower is already dead.",
      "So who returned the book?",
      "That is not a rhetorical question."
    ];
  }

  if (answerCount >= 3) {
    return [
      "Level 1",
      "You seem very interested in the book itself.",
      "Try paying attention to the borrower.",
      "The clue will not multiply just because you stare at it."
    ];
  }

  return [
    "Level 1",
    "The book itself does not seem important.",
    "The person who borrowed it probably is.",
    "A neat little trap, if you are willing to notice it."
  ];
}

export function AskNickModal({ answerCount, clueCount, isOpen, nickIntroduced, onClose, onIntroComplete }) {
  const [introIndex, setIntroIndex] = useState(0);
  const hint = getNickHint(answerCount, clueCount);

  function continueIntro() {
    const nextIndex = introIndex + 1;

    if (nextIndex >= introSlides.length) {
      setIntroIndex(0);
      onIntroComplete();
      return;
    }

    setIntroIndex(nextIndex);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Assistant">
      <div className="nick-modal">
        <div className="nick-profile">
          <div className="nick-avatar" aria-hidden="true">
            <MessagesSquare size={22} />
          </div>
          <div>
            <h3>Nick</h3>
            <span>Investigation Partner</span>
          </div>
        </div>
        {!nickIntroduced ? (
          <div className="nick-dialogue">
            {introSlides[introIndex].lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <Button onClick={continueIntro}>{introSlides[introIndex].action}</Button>
          </div>
        ) : (
          <div className="nick-dialogue">
            {hint.map((line, index) => (
              <p key={`${line}-${index}`} className={index === 0 ? "nick-level" : ""}>
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}
