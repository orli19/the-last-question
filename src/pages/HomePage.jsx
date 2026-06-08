import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { Button } from "../components/ui/Button.jsx";
import { Card } from "../components/ui/Card.jsx";

const archiveSlots = [
  {
    archiveId: "archive-case-01",
    caseNumber: "Case 01",
    status: "CASE RESOLVED",
    action: "Review Case"
  },
  {
    archiveId: "archive-case-02",
    caseNumber: "Case 02",
    status: "ACTIVE CASE",
    action: "Investigate"
  },
  {
    archiveId: "archive-case-03",
    caseNumber: "Case 03",
    status: "NEW FILE",
    action: "Open File"
  }
];

function formatCaseNumber(caseNumber) {
  return caseNumber.replace(/^Case/i, "CASE");
}

function getCaseHookLines(caseItem) {
  if (caseItem.id === "case001") {
    return ["A book was returned.", "No one remembered borrowing it."];
  }

  return caseItem.prompt?.en?.slice(0, 2) ?? [caseItem.summary?.en ?? "Evidence waits in the dark."];
}

function formatCaseMeta(caseItem) {
  return `${caseItem.vocabularyLevel} · ${caseItem.difficulty} · ${caseItem.estimatedTime}`;
}

export function HomePage({ cases, solvedCaseId, onStartCase }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openingCaseId, setOpeningCaseId] = useState(null);
  const sourceCase = cases.find((caseItem) => caseItem.status === "playable") ?? cases[0];
  const displayCases = archiveSlots.map((slot) => ({
    ...sourceCase,
    ...slot,
    sourceCaseId: sourceCase.id,
  }));
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const frameRef = useRef(null);
  const dragRef = useRef({
    isDragging: false,
    pointerId: null,
    startX: 0,
    scrollLeft: 0,
  });

  function updateCardMotion() {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const trackRect = track.getBoundingClientRect();
    const snapFocus = trackRect.left + trackRect.width / 2;
    let nextActiveIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) {
        return;
      }

      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const rawDistance = Math.abs(cardCenter - snapFocus) / Math.max(cardRect.width, 1);
      const distance = Math.min(rawDistance, 1);
      const scale = 1 - distance * 0.1;
      const opacity = 1 - distance * 0.48;

      card.style.setProperty("--case-card-scale", scale.toFixed(3));
      card.style.setProperty("--case-card-opacity", opacity.toFixed(3));

      if (rawDistance < closestDistance) {
        closestDistance = rawDistance;
        nextActiveIndex = index;
      }
    });

    setActiveIndex((currentIndex) => (currentIndex === nextActiveIndex ? currentIndex : nextActiveIndex));
  }

  function scheduleCardMotionUpdate() {
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      updateCardMotion();
    });
  }

  useEffect(() => {
    updateCardMotion();
    window.addEventListener("resize", scheduleCardMotionUpdate);

    return () => {
      window.removeEventListener("resize", scheduleCardMotionUpdate);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [cases]);

  function scrollToCase(index) {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handlePointerDown(event) {
    const track = trackRef.current;
    if (!track || event.pointerType !== "mouse" || event.target.closest("button")) {
      return;
    }

    dragRef.current = {
      isDragging: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
    };

    track.classList.add("is-dragging");
    track.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    const track = trackRef.current;
    const drag = dragRef.current;
    if (!track || !drag.isDragging || drag.pointerId !== event.pointerId) {
      return;
    }

    event.preventDefault();
    track.scrollLeft = drag.scrollLeft - (event.clientX - drag.startX);
    scheduleCardMotionUpdate();
  }

  function endDrag(event) {
    const track = trackRef.current;
    const drag = dragRef.current;
    if (!track || !drag.isDragging || drag.pointerId !== event.pointerId) {
      return;
    }

    dragRef.current = {
      isDragging: false,
      pointerId: null,
      startX: 0,
      scrollLeft: 0,
    };

    track.classList.remove("is-dragging");
    track.releasePointerCapture(event.pointerId);
    scheduleCardMotionUpdate();
  }

  function openCase(caseId, archiveId = caseId) {
    if (openingCaseId) {
      return;
    }

    setOpeningCaseId(archiveId);
    window.setTimeout(() => onStartCase(caseId), 420);
  }

  return (
    <main className={["app-shell", "home-page", openingCaseId ? "is-opening-case" : ""].filter(Boolean).join(" ")}>
      <section
        ref={trackRef}
        className="case-grid"
        aria-label="Case archive"
        onPointerCancel={endDrag}
        onPointerDown={handlePointerDown}
        onPointerLeave={endDrag}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onScroll={scheduleCardMotionUpdate}
      >
        {displayCases.map((caseItem, index) => {
          const isSolved = solvedCaseId === caseItem.sourceCaseId && index === 0;
          const caseNumber = formatCaseNumber(caseItem.caseNumber);
          const title = caseItem.title.en.toUpperCase();

          return (
            <Card
              key={caseItem.archiveId}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              as="article"
              className={[
                "case-card",
                "is-active",
                isSolved ? "is-solved" : "",
                openingCaseId === caseItem.archiveId ? "is-launching" : "",
                activeIndex === index ? "is-current" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="case-card__spotlight" aria-hidden="true" />
              {isSolved ? <div className="truth-seal" aria-label="Truth found">TRUTH FOUND</div> : null}
              <p className="case-status-label">{caseItem.status}</p>

              <h2>{title}</h2>
              <p className="case-card__zh">{caseItem.title.zh}</p>
              <p className="case-card__hook">
                {getCaseHookLines(caseItem).map((line, lineIndex, hookLines) => (
                  <span key={line}>
                    {lineIndex === 0 ? '"' : ""}
                    {line}
                    {lineIndex === hookLines.length - 1 ? '"' : ""}
                  </span>
                ))}
              </p>

              <Button
                className="case-open-button"
                disabled={Boolean(openingCaseId)}
                icon={Play}
                variant="secondary"
                onClick={() => openCase(caseItem.sourceCaseId, caseItem.archiveId)}
              >
                {caseItem.action}
              </Button>

              <dl className="case-meta" aria-label={`${caseNumber} details`}>
                <dt>Case details</dt>
                <dd>{formatCaseMeta(caseItem)}</dd>
              </dl>
            </Card>
          );
        })}
      </section>

      <div className="case-pagination" aria-label="Case position">
        {displayCases.map((caseItem, index) => (
          <button
            key={caseItem.archiveId}
            className={[
              activeIndex === index ? "is-active" : "",
              solvedCaseId === caseItem.sourceCaseId && index === 0 ? "is-solved" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            type="button"
            aria-label={`Show ${formatCaseNumber(caseItem.caseNumber)}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => scrollToCase(index)}
          >
            {solvedCaseId === caseItem.id ? "◆" : activeIndex === index ? "◈" : "◇"}
          </button>
        ))}
      </div>
    </main>
  );
}
