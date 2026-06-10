import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { playSound, setAudioMuted, startOpeningBgm, stopOpeningBgm } from "../services/audioManager.js";

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
  const [isAudioMuted, setIsAudioMuted] = useState(true);

  useEffect(() => {
    setAudioMuted(true);
    const copyTimer = window.setTimeout(() => setIsCopyVisible(true), COPY_VISIBLE_DELAY);
    const buttonTimer = window.setTimeout(() => setIsButtonVisible(true), BUTTON_VISIBLE_DELAY);
    const readyTimer = window.setTimeout(() => setIsReady(true), BUTTON_READY_DELAY);

    return () => {
      window.clearTimeout(copyTimer);
      window.clearTimeout(buttonTimer);
      window.clearTimeout(readyTimer);
      stopOpeningBgm();
    };
  }, []);

  function handleAudioStart() {
    if (isAudioMuted) {
      return;
    }

    startOpeningBgm();
  }

  function handleBegin() {
    if (!isReady || isLeaving) {
      return;
    }

    if (!isAudioMuted) {
      startOpeningBgm();
      playSound("click");
    }
    setIsLeaving(true);
    window.setTimeout(onBegin, EXIT_DELAY);
  }

  function toggleAudio(event) {
    event.stopPropagation();

    setIsAudioMuted((current) => {
      const nextMuted = !current;
      setAudioMuted(nextMuted);

      if (!nextMuted) {
        startOpeningBgm();
      }

      return nextMuted;
    });
  }

  return (
    <main
      className={["opening-page", isLeaving ? "is-leaving" : ""].filter(Boolean).join(" ")}
      onPointerDown={handleAudioStart}
    >
      <div className="opening-atmosphere" aria-hidden="true">
        <span className="opening-orbit opening-orbit--one" />
        <span className="opening-orbit opening-orbit--two" />
      </div>

      <button
        aria-label={isAudioMuted ? "Turn audio on" : "Turn audio off"}
        aria-pressed={!isAudioMuted}
        className={["opening-audio-toggle", isAudioMuted ? "is-muted" : ""].filter(Boolean).join(" ")}
        type="button"
        onClick={toggleAudio}
        onPointerDown={(event) => event.stopPropagation()}
      >
        {isAudioMuted ? (
          <VolumeX aria-hidden="true" size={18} strokeWidth={1.8} />
        ) : (
          <Volume2 aria-hidden="true" size={18} strokeWidth={1.8} />
        )}
      </button>

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
