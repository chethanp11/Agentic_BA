# Dev Workflow

`dev_workflow/` defines the reusable workflow layer for this repository. It is artifact-driven, stage-driven, and designed to be orchestrated by simple scripts now and a graph-based orchestrator later.

## Canonical entry points

1. `intent-toplan.md`
2. `00-plan-todesign.md`

## Basic flow

1. Read intent and current repository state.
2. Convert that into a scoped iteration plan.
3. Translate the plan into design updates.
4. Then move into implementation, tests, review, validation, fix, and closeout as needed.

## Current scaffold

- `WORKFLOW-SYSTEM.md`
- `STATE-MODEL.md`
- `ARTIFACT-CONTRACTS.md`
- `registry/prompt-registry.md`
- `orchestrator/`
- `templates/`
- `prompts/`

## Notes

- The root-level workflow files in this folder are the current canonical entry points for the first pass.
- The older step files in this directory can remain during migration, but new orchestration should target the canonical files above.
