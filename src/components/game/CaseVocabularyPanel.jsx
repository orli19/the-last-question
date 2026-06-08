import { Search } from "lucide-react";
import { Button } from "../ui/Button.jsx";
import { Card } from "../ui/Card.jsx";

export function CaseVocabularyPanel({ vocabulary, onOpenWord }) {
  return (
    <Card className="case-vocabulary-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Investigation Notes</p>
          <h2>Case Vocabulary</h2>
        </div>
        <span className="mini-count">{vocabulary.length}</span>
      </div>
      <div className="word-list compact" aria-label="Case Vocabulary">
        {vocabulary.map((item) => (
          <Button key={item.id} icon={Search} variant="note" onClick={() => onOpenWord({ ...item, isFocusWord: true })}>
            {item.word}
          </Button>
        ))}
      </div>
    </Card>
  );
}
