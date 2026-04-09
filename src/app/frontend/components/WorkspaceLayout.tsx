import type { ReactNode } from "react";

type WorkspaceLayoutProps = {
  header: ReactNode;
  stageRail: ReactNode;
  contextPanel: ReactNode;
  tracePanel: ReactNode;
  actionBar: ReactNode;
};

export function WorkspaceLayout({
  header,
  stageRail,
  contextPanel,
  tracePanel,
  actionBar
}: WorkspaceLayoutProps) {
  return (
    <main className="aba-shell">
      {header}
      <section className="aba-grid">
        {stageRail}
        {contextPanel}
        {tracePanel}
      </section>
      {actionBar}
    </main>
  );
}
