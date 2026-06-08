import { ClickableText } from "./ClickableText.jsx";

export function LocalizedText({
  value,
  languageMode,
  as: Component = "p",
  className = "",
  onWordClick,
  vocabularyLookup
}) {
  const en = Array.isArray(value?.en) ? value.en : [value?.en].filter(Boolean);
  const zh = Array.isArray(value?.zh) ? value.zh : [value?.zh].filter(Boolean);

  return (
    <div className={["localized-text", className].filter(Boolean).join(" ")}>
      {en.map((line, index) => (
        <Component key={`en-${index}`} className="localized-text__en">
          <ClickableText onWordClick={onWordClick} vocabularyLookup={vocabularyLookup}>
            {line}
          </ClickableText>
        </Component>
      ))}
      {languageMode === "bilingual"
        ? zh.map((line, index) => (
            <Component key={`zh-${index}`} className="localized-text__zh">
              {line}
            </Component>
          ))
        : null}
    </div>
  );
}
