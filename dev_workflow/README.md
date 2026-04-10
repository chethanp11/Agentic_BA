# Dev Workflow

`dev_workflow/` defines the reusable workflow layer for this repository. It is artifact-driven, stage-driven, and designed to be orchestrated by simple scripts now and a graph-based orchestrator later.

## Basic flow

1. Read intent and current repository state.
2. Use the intake prompts under `prompts/00-intake/` to classify the request and build the iteration plan.
3. Use the design prompts under `prompts/01-design/` to translate the plan into design updates.
4. Then move through implementation, tests, review, validation, fix, and closeout prompts as needed.

## Current scaffold

- `WORKFLOW-SYSTEM.md`
- `STATE-MODEL.md`
- `ARTIFACT-CONTRACTS.md`
- `registry/prompt-registry.md`
- `orchestrator/`
- `templates/`
- `prompts/`

## Notes

- Workflow nodes may reference matching GitHub skills using `$` links to the relevant `.github/skills/*/SKILL.md` file.
