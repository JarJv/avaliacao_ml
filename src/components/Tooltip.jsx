export default function Tooltip({ texto, children }) {
  return (
    <span className="tooltip relative cursor-help text-purple-300">
      {children}
      <span className="tooltiptext">{texto}</span>
    </span>
  );
}