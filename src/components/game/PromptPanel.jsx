import { Card } from "../ui/Card.jsx";
import { LocalizedText } from "./LocalizedText.jsx";

const terminalPrompt = {
  en: [
    "A book was returned to a library.",
    "The librarian looked at it",
    "for less than ten seconds.",
    "Then she immediately called",
    "the police."
  ],
  zh: [
    "一本书被归还到了图书馆。",
    "图书管理员看了它",
    "不到十秒钟。",
    "随后她立刻报了",
    "警。"
  ]
};

export function PromptPanel({ caseData, languageMode, onWordClick, vocabularyLookup }) {
  return (
    <Card className="prompt-panel">
      <span className="case-hud-corner case-hud-corner--tl" aria-hidden="true" />
      <span className="case-hud-corner case-hud-corner--tr" aria-hidden="true" />
      <span className="case-hud-corner case-hud-corner--br" aria-hidden="true" />
      <span className="case-hud-corner case-hud-corner--bl" aria-hidden="true" />
      <LocalizedText
        className="prompt-panel__text"
        value={caseData.id === "case001" ? terminalPrompt : caseData.prompt}
        languageMode={languageMode}
        onWordClick={onWordClick}
        vocabularyLookup={vocabularyLookup}
      />
    </Card>
  );
}
