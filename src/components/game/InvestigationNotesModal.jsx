import { Modal } from "../ui/Modal.jsx";

export function InvestigationNotesModal({ word, onClose }) {
  const isOpen = Boolean(word);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Investigation Notes" mode="sheet">
      {word ? (
        <div className="word-detail">
          <div className="word-detail__headline">
            <strong>{word.word}</strong>
            <span>{word.phonetic || "Not listed"}</span>
          </div>
          <p className="word-detail__meaning">
            <span>{word.partOfSpeech}</span>
            {word.zh}
          </p>
          <div className="word-detail__extras">
            {word.isFocusWord || word.example ? (
              <>
                <section>
                  <h3>Example</h3>
                  <p>{word.example}</p>
                </section>
                {word.reasoningHint ? (
                  <section>
                    <h3>Reasoning Hint</h3>
                    <p>{word.reasoningHint}</p>
                  </section>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
