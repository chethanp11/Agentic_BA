# ABA Codex Project Context

This is the Codex-specific compact context file for Agentic Business Analytics (ABA). It replaces the copied GitHub Copilot filename with a neutral context file while preserving the same high-level system guidance.

## System Purpose

ABA is a controlled agentic system for end-to-end business analytics. It is an analytics execution system, not a chatbot or prompt-only workflow. The system turns ambiguous business problems into structured analytical outcomes through stage-driven orchestration, bounded reasoning, governed execution, and traceable validation.

## Core Architecture Principles

- Separate reasoning, control, execution, context, validation, and observability responsibilities.
- Model every run as a graph of explicit stages and transitions.
- Keep all outputs structured and machine-readable.
- Support iterative, exploratory, and branchable analysis flows.
- Treat context as curated input, not an unbounded dump.
- Preserve evidence, contradictions, failures, and lineage instead of flattening them.
- Make every decision auditable through state, checkpoints, and trace records.
- Enforce controlled execution with safe, sandboxed tool use.

## Key Components

- LangGraph is the control layer.
- Agents are modular reasoning components with strict input and output contracts.
- Context is stage-aware, curated, reusable, and traceable.
- Execution handles SQL, Python, and SAS under governed runtime conditions.
- Validation applies policy checkpoints, confidence checks, contradiction handling, and escalation triggers.
- Observability captures run traces, logs, artifacts, retries, failures, and lineage.

## Development Expectations

- Start from `intent/` and keep design aligned to it.
- Use a design-first workflow before implementation.
- Respect stage boundaries, contracts, and control-flow ownership.
- Update the correct layer for the change: design before code, tests to prove acceptance, and logs when reality changes.
- Do not invent behavior that is not represented in intent or approved design.
