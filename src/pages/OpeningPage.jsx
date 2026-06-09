import { useEffect, useState } from "react";

const introLines = [
  "A new case awaits.",
  "",
  "Ask questions.",
  "Follow clues.",
  "Find the truth.",
  "Every answer reveals another mystery.",
  "Every clue changes the story.",
];

const COPY_VISIBLE_DELAY = 2200;
const BUTTON_VISIBLE_DELAY = 2850;
const BUTTON_READY_DELAY = 3450;
const EXIT_DELAY = 620;

export function OpeningPage({ onBegin }) {
  const [isReady, setIsReady] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isCopyVisible, setIsCopyVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const copyTimer = window.setTimeout(() => setIsCopyVisible(true), COPY_VISIBLE_DELAY);
    const buttonTimer = window.setTimeout(() => setIsButtonVisible(true), BUTTON_VISIBLE_DELAY);
    const readyTimer = window.setTimeout(() => setIsReady(true), BUTTON_READY_DELAY);

    return () => {
      window.clearTimeout(copyTimer);
      window.clearTimeout(buttonTimer);
      window.clearTimeout(readyTimer);
    };
  }, []);

  function handleBegin() {
    if (!isReady || isLeaving) {
      return;
    }

    setIsLeaving(true);
    window.setTimeout(onBegin, EXIT_DELAY);
  }

  return (
    <main className={["opening-page", isLeaving ? "is-leaving" : ""].filter(Boolean).join(" ")}>
      <div className="opening-atmosphere" aria-hidden="true">
        <span className="opening-orbit opening-orbit--one" />
        <span className="opening-orbit opening-orbit--two" />
      </div>

      <section className="opening-panel" aria-labelledby="opening-title">
        <span className="opening-corner opening-corner--tl" aria-hidden="true" />
        <span className="opening-corner opening-corner--tr" aria-hidden="true" />
        <span className="opening-corner opening-corner--br" aria-hidden="true" />
        <span className="opening-corner opening-corner--bl" aria-hidden="true" />

        <div className="opening-panel__inner">
          <p className="opening-kicker">Case Archive</p>
          <h1 id="opening-title">THE LAST QUESTION</h1>
          <div className="opening-divider" aria-hidden="true" />

          <div
            className={["opening-copy", isCopyVisible ? "is-visible" : ""].filter(Boolean).join(" ")}
            aria-label={introLines.join(" ")}
          >
            {introLines.map((line, index) => (
              <p className={line ? "" : "is-spacer"} key={`${index}-${line || "spacer"}`}>
                <span>{line}</span>
              </p>
            ))}
          </div>

          <button
            className={["opening-begin", isButtonVisible ? "is-visible" : ""].filter(Boolean).join(" ")}
            type="button"
            disabled={!isReady || isLeaving}
            onClick={handleBegin}
          >
            Investigation
          </button>
        </div>
      </section>
    </main>
  );
}
