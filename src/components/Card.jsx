export default function Card({ children }) {
  return (
    <div className="
      bg-white/5 backdrop-blur-lg
      border border-purple-500/20
      rounded-xl p-4
      hover:scale-105 transition
      glow
    ">
      {children}
    </div>
  );
}