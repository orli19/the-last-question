export function ProgressBar({ value, label = "Progress" }) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div className="progress" aria-label={label} aria-valuemin="0" aria-valuemax="100" aria-valuenow={safeValue}>
      <div className="progress__meta">
        <span>{label}</span>
        <strong>{safeValue}%</strong>
      </div>
      <div className="progress__track">
        <div className="progress__fill" style={{ width: `${safeValue}%` }} />
      </div>
    </div>
  );
}
