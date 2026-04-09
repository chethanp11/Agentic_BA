type ActionBarProps = {
  decision: string;
};

export function ActionBar({ decision }: ActionBarProps) {
  return (
    <section className="aba-card aba-action-bar" aria-label="workspace actions">
      <div className="aba-label">Pending decision</div>
      <div className="aba-action-bar__decision">{decision}</div>
      <div className="aba-action-bar__buttons">
        <button type="button">Approve</button>
        <button type="button">Reject</button>
        <button type="button">Request revision</button>
      </div>
    </section>
  );
}
