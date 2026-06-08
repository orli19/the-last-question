export function LanguageToggle({ languageMode, onChange }) {
  return (
    <div className="segmented" aria-label="Language mode">
      <button
        className={languageMode === "english" ? "is-active" : ""}
        type="button"
        onClick={() => onChange("english")}
      >
        EN
      </button>
      <button
        className={languageMode === "bilingual" ? "is-active" : ""}
        type="button"
        onClick={() => onChange("bilingual")}
      >
        BI
      </button>
    </div>
  );
}
