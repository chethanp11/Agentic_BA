# Project Agents Guide

## Purpose
Provide repo-level rules for Codex and other AI collaborators working on AI application development.

## Project framing
This repository supports development of an agentic system through design-first workflows and LangGraph-driven agent orchestration. Agents are capable of taking actions and making decisions. It is not a generic application template or prompt-only workflow; implementation decisions are driven from intent, design, tests, and validation. The active AI environment may be GitHub, Claude, or Codex, but the repo contract remains the same across environments.

## Environment contract
- `AGENTS.md` is always read first in every environment.
- `.env` selects the active environment through `AI_ENV=github`, `AI_ENV=claude`, or `AI_ENV=codex`.
- After reading `AGENTS.md`, read the environment-specific context files for the active `AI_ENV`.
- If `AI_ENV` is missing, fall back to the environment-specific files that match the runtime the agent is operating in. If that is still ambiguous, ask before editing.

### Environment file mapping
1. `AI_ENV=github`
   Read `.github/copilot-instructions.md` and `.github/tech-stack.md`.
2. `AI_ENV=claude`
   Read `CLAUDE.md`, `.claude/project-memory.md`, and `.claude/tech-stack.md`.
3. `AI_ENV=codex`
   Read `.codex/project-context.md` and `.codex/tech-stack.md`.

## Always-update contract
- When the user gives a new prompt that changes workflow, precedence, ownership, or operating rules, update `AGENTS.md` and the active environment context files first.
- Treat `AGENTS.md` plus the active environment context files as the always-current top-level contract for the repo.
- Then propagate any resulting rule changes into design, tests, logs, or workflow files as needed.

## Contract roles
1. `AGENTS.md` is the authoritative repo contract. It defines durable policy, precedence, file ownership, traceability rules, and the structure that every other artifact must follow.
2. The active environment context files are the compact high-level design source and working context for that environment.
3. If `AGENTS.md` and the active environment context files overlap, keep the durable policy in `AGENTS.md` and the current high-level design summary in the environment-specific context files.
4. If the active environment context files and `design/*` disagree, the active environment context files win for high-level design intent until they are updated.
5. Always read `AGENTS.md` plus the active environment context files before starting any task.
6. Reread `AGENTS.md` plus the active environment context files at the start of every new task, and also whenever a prompt changes workflow, precedence, ownership, or operating rules.

## Repo Shape
- `intent/` holds requirements and feedback inputs.
- `plan/` is the current iteration workspace.
- `design/` is the live design source of truth.
- `src/` is the implementation layer.
- `tests/` is the validation layer.
- `dev_log/` is the permanent execution record.
- `dev_workflow/` contains the prompts and runbooks that drive the loop.
- `skills/` contains reusable scoped procedures.
- `.github/` or `.claude/` or `.codex/` contains local context and command references only.

## Boundary rules
1. If a request is ambiguous about scope, file targets, validation, or ownership, stop and ask before editing.
2. Do not edit outside the explicit task scope unless the change is a direct dependency of that scope and is called out in the same pass.
3. Prefer the smallest set of files that fully completes the task.

## Workflow contract
1. `intent/` is the starting point of requirements.
2. `intent/product-intent.md` and `intent/feedback.md` are the only human-edited operational inputs for the workflow.
3. `intent/gaps.md` is a system-edited operational input that is updated by a prompt after reviewing `dev_log/*`.
4. The active environment context files are the high-level design source of truth above `design/*`.
5. `design/` is the detailed design layer that must align to the active environment context files.
6. `plan/` is the temporary working area for the current iteration only.
7. `dev_log/` is the permanent archive of what was actually updated and validated.
8. `src/` is the implementation space, and `tests/` is the validation space.
9. A new iteration starts only after `intent/` or `feedback.md` is updated manually, or after validation surfaces gaps that are recorded back into `intent/`.
10. The active implementation agent executes the design → plan → code → test → validate → fix loop end-to-end. Other assistants are used only for structuring intent, refining design, and improving workflow.

## Folder contracts
### `intent/`
1. Files that belong here are `product-intent.md`, `feedback.md`, and `gaps.md`.
2. Create or revise `product-intent.md` manually when product goals, scope, user flows, constraints, or expected behavior change.
3. Create or revise `feedback.md` manually when manual review, testing, usage feedback, bug observations, or scope changes introduce new findings.
4. Update `gaps.md` through a prompt that reads `dev_log/*` and records system-detected gaps, not human-authored interpretation.
5. Do not place implementation code, ad hoc design rewrites, or silent reinterpretation here.

### `plan/`
1. Files that belong here are `design-update.md`, `code-update.md`, and `test-update.md`.
2. Create or revise these files at the start of an iteration after reading `intent/`, `design/`, `src/`, and `tests/`.
3. Use this folder to reconcile gaps and classify pending work into design, code, and test changes.
4. Number plan entries with prefixes such as `REQ-*`, `DEV-*`, and `TEST-*` so the current iteration is explicit.
5. Do not store final implementation, hidden assumptions, or direct code edits here.

### `design/`
1. Files that belong here are `system-design.md`, `architecture.md`, `ux-flows.md`, and `acceptance-criteria.md`.
2. Create or revise these files when approved intent, plan work, or the active environment context files change agentic system behavior, LangGraph orchestration, agent workflows, or correctness rules.
3. Use this folder for the detailed design layer. Keep each file focused on its owned concern and keep the set complementary.
4. Explicit file ownership:
   - `system-design.md` documents agentic behavior, lifecycle, states, validations, runtime expectations, and lifecycle flow.
   - `architecture.md` documents components, agents, orchestration, interfaces, state/control model, integration points, and agentic decision-making.
   - `ux-flows.md` documents analyst workflows, intervention points, review flows, and stage interaction.
   - `acceptance-criteria.md` documents correctness rules, testable criteria, and expected outcomes.
5. Codex must update the correct design file based on the nature of the change and must not spread the same content across all four documents.
6. If a design gap is discovered during implementation, correct it in the right design file before normalizing implementation.
7. These files are plain human-readable markdown and do not use prefix IDs as in-document numbering.
8. Do not add extra design files, prefixed in-document traceability labels, or repeated content that blurs file ownership.
9. `REQ-*`, `DEV-*`, and `TEST-*` are used in comments only.
10. If any of the four canonical design files are missing on a new project or first pass, create them before broadening the design layer.

### `src/`
1. Files that belong here are implementation source files, app scaffolding, and application documentation such as `README.md` and `src/docs/`.
2. Create or revise these files only after the design has defined the expected behavior and structure for the change.
3. If `src/` is empty on the first implementation pass, scaffold it from design before adding behavior.
4. These files are plain implementation artifacts and do not use prefix IDs as primary numbering.
5. Do not store design drafts, plan notes, or code that diverges from the current design without an approved update.
6. `REQ-*`, `DEV-*`, and `TEST-*` are used in comments only
7. Use the active environment tech-stack file as the local implementation stack reference for `src/` layout, backend/frontend split, and testing assumptions.

### `tests/`
1. Files that belong here are traceability notes, test plans, validation assets, and the test suites that prove the design.
2. Create or revise these files whenever acceptance criteria, workflows, or implemented behavior change.
3. If `tests/` is empty on the first test pass, scaffold it from the design before broadening coverage.
4. These files are plain validation artifacts and do not use prefix IDs as primary numbering.
5. Do not invent tests without design linkage or keep validation artifacts that do not map back to criteria.
6. `REQ-*`, `DEV-*`, and `TEST-*` are used in comments only

### `dev_log/`
1. Files that belong here are `design-update-log.md`, `code-update-log.md`, `test-update-log.md`, and `validation-results.md`.
2. Create or revise these files through the workflow prompts after the corresponding design, code, test, or validation step has actually occurred.
3. Number log entries with prefixes such as `REQ-*`, `DEV-*`, and `TEST-*` to show what was implemented where, and keep the archive permanent and traceable.
4. Do not add extra log files, make manual edits outside the workflow, or fabricate validation evidence.


### `dev_workflow/`
1. Files that belong here are reusable prompts and runbooks that drive the closed loop from design to validation.
2. Create or revise these files when the repository workflow itself needs a new or better step, order, or guardrail.
3. Use this folder to orchestrate updates to design, code, tests, and logs in the correct order.
4. Do not place direct implementation content, hidden one off procedures, or workflow steps that bypass the contract.
5. Read `AGENTS.md` and the active environment context files first before running these prompts.

### `skills/`
1. Files that belong here are skill definitions and supporting instructions for reusable scoped workflows.
2. Create or revise these files only when the task really needs a reusable skill that fits a defined scope.
3. Use this folder for tasks that match the skill description and benefit from a reusable workflow.
4. use skills applicable along with `dev_workflow/*` prompts.
4. Do not use a skill outside its scope or bypass `AGENTS.md` and the active design.

### `.github/`
1. Files that belong here are repo local context, command references, and other Codex support files.
2. Create or revise these files when local working guidance or command references need to change for the repository.
3. Use this folder for compact working context that helps copilot operate inside the contract.
4. Do not replace the top level contract here, store implementation state here, or duplicate the full repo policy.
5. `.github/copilot-instructions.md` and `.github/tech-stack.md` are used only when `AI_ENV=github`.
6. Keep the GitHub-specific files aligned with `design/architecture.md` and `design/system-design.md` when GitHub is the active environment.

### `.claude/`
1. Files that belong here are Claude-specific project memory, tech stack context, slash commands, and optional Claude agents.
2. Create or revise these files when Claude-specific working guidance or command workflows need to change for the repository.
3. Use this folder only when `AI_ENV=claude`.
4. Do not replace the top level contract here, store implementation state here, or duplicate the full repo policy.

### `.codex/`
1. Files that belong here are Codex-specific project context, tech stack context, and Codex-native reusable skills.
2. Create or revise these files when Codex-specific working guidance or scoped reusable procedures need to change for the repository.
3. Use this folder only when `AI_ENV=codex`.
4. Do not replace the top level contract here, store implementation state here, or duplicate the full repo policy.

## Validation rules
1. Every non-trivial change must end with an explicit validation step such as `git diff --check`, a targeted test, or another relevant check.
2. Document the validation command or check in the workflow or log artifact that records the iteration.
3. Keep validation aligned with the changed layer: design changes validate structure and content, code changes validate behavior, and test changes validate coverage.
4. ABA design reviews must include stage coverage, agent coverage, orchestration clarity, context and memory treatment, validation/governance coverage, and traceability/evaluation readiness.

## Required read order before substantial work
Read the latest relevant artifacts in this order before modifying more than one file:
1. `AGENTS.md` and the active environment context files selected by `AI_ENV`
2. `intent/product-intent.md`
3. `intent/feedback.md` or the current active feedback file during migration
4. `intent/gaps.md` when system-detected gaps exist
5. `plan/design-update.md`
6. `plan/code-update.md`
7. `plan/test-update.md`
8. Relevant files from `design/`
9. `tests/design-traceability.md` and `tests/test-plan.md`
10. The active `dev_log/` files
11. Relevant step file from `dev_workflow/`

## Required behavior
1. Start any task by reading `AGENTS.md` and the active environment context files selected by `AI_ENV`.
1. Always read `intent/` before starting a task.
2. Treat `intent/` as the starting point of every loop and the highest-priority human input.
3. Do not modify `intent/` unless the user explicitly asks for it.
4. Translate intent into `plan/*` before coding or rewriting the active environment context files, design, code, or tests.
5. Preserve the detail in `intent/*` when translating into `plan/*`; do not compress away constraints, distinctions, or open questions that affect behavior.
6. Compare the latest intent against current high-level context, detailed design, code, and tests, then split the needed work into `plan/design-update.md`, `plan/code-update.md`, and `plan/test-update.md`.
7. Carry unresolved ambiguities into `plan/*` and the relevant downstream artifact instead of silently choosing a direction.
8. Make the plan explicit about what changed, what was deferred, and which `REQ-*`, `TEST-*`, or `DEV-*` items were created or revised.
9. Update or add tests and eval mappings whenever behavior, contracts, or acceptance criteria change.
10. Stay inside the documented version and iteration boundary after intent has been interpreted into plan and context.
11. Do not invent behavior that is not represented in intent, plan, the active environment context files, design, or acceptance artifacts.
12. Align implementation with both intent and plan-guided context and design.
13. Always reflect meaningful intent changes into `plan/*`, the active environment context files, `design/*`, `tests/*`, and the active `dev_log/` files.
14. Update logs when the work changes reality:
   - `dev_log/design-update-log.md` for meaningful design updates
   - `dev_log/code-update-log.md` for meaningful code updates
   - `dev_log/test-update-log.md` for meaningful test updates
   - `dev_log/validation-results.md` for actual validation evidence
16. If a requirement is unclear, log it as a plan or design issue or open question instead of implementing a guess.
17. Treat manual feedback as first-class input; route it through the active feedback record in `intent/` and the operational logs in `dev_log/` when it should influence future direction.

## Allowed issue classifications
Use exactly these categories when classifying issues or feedback:
- design defect
- implementation defect
- test defect
- eval gap
- environment issue
- backlog enhancement

## Traceability rules
1. `intent/*` defines what humans want.
2. The active environment context files define the high-level design and operating model above the detailed design files.
3. `design/ux-flows.md` defines how users experience the system.
4. `design/system-design.md` defines how the system behaves.
5. `design/acceptance-criteria.md` defines what correct means.
6. `REQ-*` should describe design changes
11. `DEV-*` should describe code changes
8. `TEST-*` should describe tests
12. Only `plan/*` , `dev_log/*`  carry `REQ-*` , `DEV-*` `TEST-*` as ID.
13. `design/*`, `src/*`  and `tests/*` carry `REQ-*` , `DEV-*` `TEST-*` as comments only

## Testing discipline
- Create tests for all implemented behavior.
- Cover happy paths, edge cases, and failure scenarios.
- Validate against design intent, not just code behavior.
- Flag untestable or unclear design areas.

## Review discipline
For every iteration, review:
- requirement coverage
- architectural alignment
- code quality and modularity
- duplication and coupling
- failure handling
- performance risks
- security considerations
- test sufficiency

## Instruction hierarchy
When artifacts disagree, use this precedence:
1. `intent/*`
2. `plan/*`
3. The active environment context files selected by `AI_ENV`
4. `design/*`
5. `tests/*`
6. `src/*`

If implementation deviates from intent, flag it and log it. Do not silently normalize the drift.

## Repository constraints
- Keep the repo reusable by avoiding hardcoded app-specific examples in workflow and contract text unless the active project intent requires them.


## Editing model
- Human edits by default: `intent/product-intent.md`, `intent/feedback-intent.md`
- Human edits occasionally: `AGENTS.md`, `skills/*`
- System-managed through workflow: `intent/gaps.md`, `plan/*`, `design/*`, `src/*`, `tests/*`, `dev_log/*`, `dev_workflow/*`, and usually the active environment context files

## Source tree rule
- `README.md` is the project README for the copied application.
- `src/docs/` holds application purpose and functionality documentation.
- `src/` may be empty at the beginning; scaffold it from design, then refactor or expand it as design requires.

## Log ownership rule
- The four `dev_log/` files are updated by `dev_workflow/*` prompts, not by ad hoc manual edits.
- Use workflow prompts to record changes and validation evidence.

## Practical decision rules
- If intent changes, translate it into design first, then update tests, logs, and only then implementation.
- If behavior changes, update code first, then update `src/docs/` to reflect the changed behavior, and update design, tests, and logs in the same pass.
- If only implementation changes and behavior does not, keep design stable and update tests or logs as needed.
- If validation fails, classify the failure before changing code.
- If a requested change exceeds the active scope, move it to backlog unless the design is updated first.
- Do not code directly from vague intent; structure it into design first.

## Logging and artifacts
- Every iteration must update the four `dev_log/` files with what was implemented and what was validated.
- Logs must allow continuation by another agent without loss of context.
- If implementation exposes a design gap, record it in the relevant plan or design artifact before normalizing the code path.

## Alignment enforcement
- Continuously verify intent to design alignment.
- Continuously verify design to code alignment.
- Continuously verify code to tests alignment.
- Continuously verify tests to expected behavior alignment.
- If misalignment occurs, classify it as a design gap, implementation defect, test gap, or architecture mismatch, then fix it at the correct layer.

## Failure handling
- State the blocker explicitly.
- Classify the root cause.
- Propose concrete next steps.
- Proceed as far as safely possible with assumptions clearly logged.

## Reusability requirement
- Keep workflows, prompts, and structures reusable across projects.
- Avoid hardcoding a specific domain.
- Separate generic workflow logic from project-specific intent and design.

## Definition of done for a scoped iteration
- Relevant intent sections were read and interpreted explicitly.
- In-scope IDs are explicit.
- Implementation matches design and design matches intent.
- Tests exist or are intentionally deferred with documented rationale, and any manual review requirement is explicit.
- Validation evidence is recorded.
- Next actions are clear enough to continue the iteration without archaeology.

## Behavior expectations
- Be precise, not verbose.
- Challenge weak or incomplete design.
- Do not skip steps in the loop.
- Do not generate large code blindly.
- Prefer structured progress over speed.
- Surface assumptions explicitly.
- Maintain engineering discipline at all times.
