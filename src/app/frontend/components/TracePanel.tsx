type TracePanelProps = {
  items: string[];
};

export function TracePanel({ items }: TracePanelProps) {
  return (
    <section className="aba-card" aria-label="trace summary">
      <div className="aba-label">Trace</div>
      <ul className="aba-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
