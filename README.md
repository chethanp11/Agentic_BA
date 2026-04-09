# Agentic Business Analytics

Agentic Business Analytics (ABA) is a controlled, enterprise-grade analytics execution system. It is designed to turn ambiguous business problems into structured, evidence-backed analytical outcomes through governed orchestration, bounded reasoning, safe execution, and traceable validation.

## What ABA Is

ABA is not a chatbot and not a prompt-only workflow. It is a stage-driven agentic system for business analytics end to end. The system is built to support exploratory analysis, branching hypotheses, repeatable runs, and machine-readable outputs while keeping reasoning, control, execution, validation, and observability distinct.

## Key Capabilities

- Stage-driven analytics lifecycle from problem framing to insight
- Multi-hypothesis exploration, ranking, pruning, and branching
- Structured intake of ambiguous and evolving business problems
- Governed execution for SQL, Python, and SAS
- Evidence-backed insights and recommendations
- Replayable, auditable, and traceable run history
- Controlled human intervention at approval checkpoints

## System Architecture

ABA is organized as a layered control plane:

- Orchestration handles stage transitions, branching, retries, checkpoints, and convergence
- Agents reason over the problem, context, hypotheses, plans, execution results, and insights
- Context and memory keep each run stage-aware, minimal, versioned, and reusable where appropriate
- Execution runs analytical work through sandboxed tool paths
- Validation and governance enforce policy, confidence, and stage readiness
- Observability and traceability capture logs, lineage, decisions, and replay data

## Core Components

### Orchestration

LangGraph is the control brain for ABA. It owns the canonical run state and directs progression through the analytics lifecycle. The orchestrator controls transitions, retries, loops, rollback, escalation, and human-in-the-loop pauses.

### Agents

ABA uses modular reasoning agents with bounded responsibilities and strict input/output contracts. Core agents cover problem structuring, business context, data context, context curation, hypothesis generation, hypothesis prioritization, analysis planning, code generation, code review, execution interpretation, pattern or driver analysis, insight generation, recommendation, critic behavior, and insight validation.

### Context and Memory

The context system assembles a curated, stage-aware context pack for each run. It includes business context, data context, prior outputs, reusable memory, and versioned artifacts while preventing context overload and preserving traceability.

### Execution

The execution layer provides governed access to SQL, Python, and SAS. It accepts structured requests, runs them in sandboxed conditions, and returns normalized results with metadata, logs, and artifacts.

## How the System Works

1. The user submits a structured business problem and supporting context.
2. ABA normalizes the intake and builds the initial problem frame.
3. Context is assembled and curated for the current stage.
4. The system generates and prioritizes multiple hypotheses where needed.
5. A governed analysis plan is produced and validated.
6. Approved work is executed through sandboxed tools.
7. Results are interpreted, validated, and converted into insights.
8. The system produces recommendations, with human approval required where policy demands it.

Throughout the run, the orchestrator governs stage progression, validation, retries, loop-backs, and escalation. Agents provide reasoning; they do not control flow or execute tools directly.

## Governance and Validation

ABA validates every major stage before progression. Governance checkpoints enforce input quality, hypothesis quality, plan feasibility, execution safety, result integrity, and insight evidence sufficiency. Failed validation blocks progression, triggers revision, or escalates for human intervention.

Governance also enforces:

- explicit stage entry and exit conditions
- confidence and contradiction handling
- policy-based control rules
- human approval checkpoints
- audit-ready decision logging

## Observability and Traceability

ABA records structured run traces, agent inputs and outputs, stage transitions, retries, failures, checkpoints, and decision rationale. Every significant output links back to its upstream context, hypothesis, plan, execution artifacts, and evidence so runs can be replayed, inspected, and audited.

## User Experience Overview

ABA presents a structured analyst workspace, not a chat interface. The workspace makes stage progression visible, shows what the system is doing, exposes active context and evidence, and surfaces approval, override, and revision points when human action is required.

Users can:

- refine the problem statement
- review and adjust context
- inspect and select hypotheses
- approve or override plans
- inspect execution outputs and artifacts
- validate insights before finalization

## Acceptance and Quality Principles

ABA is designed to be:

- repeatable across equivalent runs
- structured and machine-readable at every boundary
- traceable from problem to insight
- governed by validation and policy checkpoints
- safe to fail with actionable reasons
- testable end to end on representative analytics scenarios

Quality is judged by accuracy, depth, relevance, evidence coverage, consistency, and actionability. Outputs must remain supported by traceable evidence and governed by the run state, not by opaque model behavior.

## Getting Started

1. Read the product intent in [intent/product-intent.md](./intent/product-intent.md).
2. Review the high-level operating context in [.github/copilot-instructions.md](./.github/copilot-instructions.md).
3. Read the detailed design in [design/system-design.md](./design/system-design.md), [design/architecture.md](./design/architecture.md), [design/ux-flows.md](./design/ux-flows.md), and [design/acceptance-criteria.md](./design/acceptance-criteria.md).
4. Check the current iteration plans in [plan/design-update.md](./plan/design-update.md), [plan/code-update.md](./plan/code-update.md), and [plan/test-update.md](./plan/test-update.md).
5. Use the workflow prompts in [dev_workflow/](./dev_workflow/) when updating the system.

## Repository Map

- [intent/](./intent/) contains product intent and feedback inputs
- [plan/](./plan/) contains the current iteration workspace
- [design/](./design/) contains the detailed design artifacts
- [src/](./src/) contains implementation code and application documentation
- [tests/](./tests/) contains validation assets and test plans
- [dev_log/](./dev_log/) contains the permanent execution record
- [dev_workflow/](./dev_workflow/) contains workflow prompts and runbooks
- [skills/](./skills/) contains reusable scoped procedures
- [.github/](./.github/) contains local context and command references
