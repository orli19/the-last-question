export function Card({ children, className = "", as: Component = "section", ...props }) {
  return (
    <Component className={["card", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </Component>
  );
}
