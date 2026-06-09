const wordPattern = /[A-Za-z]+(?:'[A-Za-z]+)?/g;

function normalizeWord(value) {
  return value.toLowerCase().replace(/^[^a-z]+|[^a-z]+$/g, "");
}

export function createVocabularyLookup(vocabulary = []) {
  const lookup = new Map();

  vocabulary.forEach((entry) => {
    const key = normalizeWord(entry.word);
    if (key) {
      lookup.set(key, entry);
    }
  });

  return lookup;
}

export function getWordEntry(word, vocabularyLookup) {
  const normalized = normalizeWord(word);
  const focusEntry = vocabularyLookup.get(normalized);

  if (focusEntry) {
    return {
      ...focusEntry,
      isFocusWord: true
    };
  }

  return null;
}

export function ClickableText({ children, onWordClick, vocabularyLookup }) {
  if (typeof children !== "string" || !onWordClick || !vocabularyLookup) {
    return children;
  }

  const parts = [];
  let lastIndex = 0;

  children.replace(wordPattern, (match, index) => {
    if (index > lastIndex) {
      parts.push(children.slice(lastIndex, index));
    }

    const entry = getWordEntry(match, vocabularyLookup);

    if (entry) {
      parts.push(
        <button
          className="word-token is-focus-word"
          key={`${match}-${index}`}
          type="button"
          onClick={() => onWordClick(entry)}
        >
          {match}
        </button>
      );
    } else {
      parts.push(match);
    }

    lastIndex = index + match.length;
    return match;
  });

  if (lastIndex < children.length) {
    parts.push(children.slice(lastIndex));
  }

  return parts;
}
