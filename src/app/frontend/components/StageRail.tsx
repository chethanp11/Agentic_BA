import type { StageItem } from "../types/workspace";

type StageRailProps = {
  stages: StageItem[];
};

export function StageRail({ stages }: StageRailProps) {
  return (
    <nav className="aba-card" aria-label="stage rail">
      <div className="aba-label">Lifecycle</div>
      <ol className="aba-stage-rail">
        {stages.map((stage) => (
          <li key={stage.id} className={`aba-stage-rail__item is-${stage.state}`}>
            <span>{stage.label}</span>
            <span>{stage.state}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
