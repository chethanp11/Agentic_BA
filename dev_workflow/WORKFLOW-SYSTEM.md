# Workflow System

`dev_workflow/` is the operational control layer for repository work. Its job is to turn intent into a bounded iteration, then move that iteration through design, implementation, validation, and closeout without losing traceability.

## System goals

- Keep work small and explicit.
- Separate planning from design updates.
- Keep implementation tied to approved design.
- Require validation before closeout.
- Preserve enough state for another agent to continue without archaeology.

## Operating model

The workflow runs as a sequence of small prompt nodes.

1. Intake turns human intent into a plan.
2. Design updates translate that plan into canonical design artifacts.
3. Implementation applies only the scoped change.
4. Tests and validation prove the change.
5. Review and fix-loop steps repair drift or defects.
6. Closeout records the final state and next starting point.

## Control rules

- Do not skip from intent to code.
- Do not widen scope inside a node.
- Do not change behavior without updating the appropriate design artifact.
- Do not treat validation as optional.
- Do not hide blockers inside a later step.

## Orchestration expectation

The workflow files should be readable by a lightweight script or future LangGraph-style orchestrator. Each node should clearly state:

- purpose
- required inputs
- files read
- files written
- entry conditions
- exit conditions
- failure conditions
- next nodes

