import { Card } from "../ui/Card.jsx";
import { LocalizedText } from "./LocalizedText.jsx";

export function PromptPanel({ caseData, languageMode, onWordClick, vocabularyLookup }) {
  return (
    <Card className="prompt-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Case Riddle</p>
          <h2>What happened?</h2>
        </div>
      </div>
      <LocalizedText
        value={caseData.prompt}
        languageMode={languageMode}
        onWordClick={onWordClick}
        vocabularyLookup={vocabularyLookup}
      />
    </Card>
  );
}
