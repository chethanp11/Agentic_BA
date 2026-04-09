import type { WorkspaceSnapshot } from "../types/workspace";

type RunHeaderProps = {
  snapshot: WorkspaceSnapshot;
};

export function RunHeader({ snapshot }: RunHeaderProps) {
  return (
    <header className="aba-card aba-header">
      <div>
        <div className="aba-label">Run status</div>
        <h1>Agentic Business Analytics</h1>
      </div>
      <div className="aba-header__meta">
        <span>Stage: {snapshot.activeStage}</span>
        <span>Status: {snapshot.runStatus}</span>
        <span>Confidence: {snapshot.confidence}</span>
      </div>
    </header>
  );
}
