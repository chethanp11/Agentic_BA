import type { WorkspaceSnapshot } from "./types/workspace";
import { ActionBar } from "./components/ActionBar";
import { ContextPanel } from "./components/ContextPanel";
import { RunHeader } from "./components/RunHeader";
import { StageRail } from "./components/StageRail";
import { TracePanel } from "./components/TracePanel";
import { WorkspaceLayout } from "./components/WorkspaceLayout";

const defaultWorkspace: WorkspaceSnapshot = {
  activeStage: "intake",
  runStatus: "blocked",
  confidence: "unrated",
  pendingDecision: "Approve intake frame",
  stages: [
    { id: "intake", label: "Intake", state: "active" },
    { id: "context", label: "Context", state: "pending" },
    { id: "hypothesis", label: "Hypothesis", state: "pending" },
    { id: "plan", label: "Plan", state: "pending" },
    { id: "execution", label: "Execution", state: "pending" },
    { id: "insight", label: "Insight", state: "pending" }
  ],
  contextSummary: [
    "Business objective",
    "Analytical question",
    "Attached documents",
    "Stage policy"
  ],
  traceSummary: [
    "Intake normalized",
    "Governance checkpoint pending",
    "No downstream transitions yet"
  ]
};

export function App() {
  return (
    <WorkspaceLayout
      header={<RunHeader snapshot={defaultWorkspace} />}
      stageRail={<StageRail stages={defaultWorkspace.stages} />}
      contextPanel={<ContextPanel items={defaultWorkspace.contextSummary} />}
      tracePanel={<TracePanel items={defaultWorkspace.traceSummary} />}
      actionBar={<ActionBar decision={defaultWorkspace.pendingDecision} />}
    />
  );
}
