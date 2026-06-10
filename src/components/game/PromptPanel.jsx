import { Card } from "../ui/Card.jsx";
import { LocalizedText } from "./LocalizedText.jsx";

export function PromptPanel({ caseData, languageMode, onWordClick, vocabularyLookup }) {
  return (
    <Card className="prompt-panel">
      <span className="case-hud-corner case-hud-corner--tl" aria-hidden="true" />
      <span className="case-hud-corner case-hud-corner--tr" aria-hidden="true" />
      <span className="case-hud-corner case-hud-corner--br" aria-hidden="true" />
      <span className="case-hud-corner case-hud-corner--bl" aria-hidden="true" />
      <LocalizedText
        className="prompt-panel__text"
        value={caseData.prompt}
        languageMode={languageMode}
        onWordClick={onWordClick}
        vocabularyLookup={vocabularyLookup}
      />
    </Card>
  );
}
