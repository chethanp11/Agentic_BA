type ContextPanelProps = {
  items: string[];
};

export function ContextPanel({ items }: ContextPanelProps) {
  return (
    <section className="aba-card" aria-label="active context">
      <div className="aba-label">Active context</div>
      <ul className="aba-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
