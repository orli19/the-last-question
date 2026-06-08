export function Button({
  children,
  className = "",
  disabled = false,
  icon: Icon,
  variant = "primary",
  ...props
}) {
  const classes = ["button", `button--${variant}`, disabled ? "is-disabled" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={disabled} {...props}>
      {Icon ? <Icon aria-hidden="true" size={18} strokeWidth={2} /> : null}
      <span>{children}</span>
    </button>
  );
}
