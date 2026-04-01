export default function Section({ title, children }) {
  return (
    <section className="mb-10 fade-in">
      <h2 className="text-2xl font-bold text-purple-300 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}