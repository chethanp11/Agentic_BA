export type StageState = "active" | "pending" | "complete" | "blocked";

export type StageItem = {
  id: string;
  label: string;
  state: StageState;
};

export type WorkspaceSnapshot = {
  activeStage: string;
  runStatus: string;
  confidence: string;
  pendingDecision: string;
  stages: StageItem[];
  contextSummary: string[];
  traceSummary: string[];
};
