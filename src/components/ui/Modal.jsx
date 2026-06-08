import { X } from "lucide-react";

export function Modal({ ariaLabel, children, isOpen, onClose, title, mode = "modal" }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-shell is-entering" role="presentation" onMouseDown={onClose}>
      <section
        className={["modal", mode === "sheet" ? "modal--sheet" : ""].filter(Boolean).join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel ?? title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="modal__header">
          {title ? <h2>{title}</h2> : <span />}
          <button aria-label="Close" className="icon-button modal-close-button" type="button" onClick={onClose}>
            <X aria-hidden="true" size={22} strokeWidth={2.4} />
          </button>
        </header>
        {children}
      </section>
    </div>
  );
}
