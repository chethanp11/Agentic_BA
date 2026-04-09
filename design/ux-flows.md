# ABA UX Flows

This file is system-generated from intent and iteration workflow. Do not edit directly.

## Purpose

This document defines the analyst-facing UX for Agentic Business Analytics (ABA). All flows in this file are derived from `intent/product-intent.md`. The UX is stage-driven, workspace-based, and structured around the analytics lifecycle. ABA is not a chatbot interface and does not present the system as free-form conversation.

## UX Principles Derived From Intent

- ABA presents a controlled analytics workspace, not a chat assistant.
- The lifecycle is visible as explicit stages with clear status, entry conditions, outputs, and next actions.
- Every stage exposes what the system is doing, what decisions it is making, and what evidence or context it is using.
- Human intervention points are explicit and governed.
- Context selection, hypothesis ranking, analysis planning, execution outputs, and insights are inspectable and traceable.
- Iteration, loop-back, retries, and re-analysis are visible to the user with reasons and changed-state summaries.
- Outputs remain structured and machine-readable, with bounded natural-language summaries where needed.

## Workspace Model

ABA uses a single analyst workspace with persistent stage navigation and stage-specific panels.

Core workspace areas:

- lifecycle rail
  - shows Intake, Context Building, Hypothesis Generation, Hypothesis Prioritization, Analysis Planning, Execution, Insight Generation, and Recommendation
- active stage canvas
  - shows structured outputs, system actions, evidence, and decision state for the current stage
- context panel
  - shows active context pack, source provenance, selection reason, freshness, and exclusions
- trace and rationale panel
  - shows stage decisions, ranking rationale, validation status, confidence, contradictions, and lineage links
- action bar
  - shows allowed user controls for the current stage such as approve, reject, modify, override, re-run, branch, or pause

Enterprise workspace overlays:

- system state header
  - shows current run status, active stage, blocking condition, pending approval state, and current confidence posture
- observability drawer
  - shows run timeline, stage transitions, retries, loop-backs, latency, and performance indicators
- artifact explorer
  - shows intermediate artifacts, generated code, execution outputs, validation records, and export options
- debugging panel
  - shows errors, impacted stage, failure reason, recovery paths, and previous retry history
- lineage drill-down panel
- shows intake to context to hypothesis to plan to execution to insight trace path

## Intent Mapping Framework

| UX concern | Product intent source |
| --- | --- |
| Controlled, non-chat analytics workspace | Sections 1, 2, 8, 11 |
| Stage-based lifecycle UX | Sections 1, 2, 8 |
| Agent visibility and decision transparency | Sections 3, 7, 8, 11 |
| Context visibility and minimal stage-aware context | Sections 4, 8, 11 |
| Multi-hypothesis display and user selection | Sections 3, 12, 18 |
| Iteration, retries, branching, and loop-back visibility | Sections 2, 13, 14, 17 |
| Execution governance and safe tool use | Sections 5, 6, 15, 17 |
| Insight evidence linkage and confidence | Sections 6, 7, 8, 16, 17 |
| Human approval, override, and correction paths | Sections 6, 8, 18 |

## Implicit Traceability Model

Every stage flow in this document implicitly aligns to these intent categories without requiring the UI to render intent labels directly.

| Intent category | UX meaning |
| --- | --- |
| orchestration | the user sees stage progression, current system state, transitions, retries, branches, and blocked flow |
| agents | the user sees which agentic activity produced a decision, output, ranking, or critique |
| context | the user sees what context is active, why it was selected, and how it influenced output |
| validation | the user sees validation status, approval checkpoints, blocked transitions, confidence, and contradiction handling |
| observability | the user can inspect run timelines, lineage, logs, performance indicators, and intermediate artifacts |

## Transparency and Control Surfaces

The workspace must continuously communicate what the system is doing and why it is doing it.

Required transparency elements:

- active stage indicator with current state such as running, waiting, blocked, escalated, retrying, or completed
- current system action summary describing the active agentic step or validation step
- decision rationale summary describing why the system selected the current path
- confidence and uncertainty strip showing confidence level, data quality impact, and contradiction status
- pending action banner when human approval or override is required to proceed

Required control elements:

- explicit approve, reject, modify, override, retry, branch, and pause actions where policy permits
- blocked transition states that prevent silent auto-progression when approval is required
- visible recovery options when a stage fails or validation blocks a transition

## Observability and Trace Surface

The UX includes a dedicated observability surface that can be opened from any stage without leaving the workspace.

| Observability element | UX behavior |
| --- | --- |
| Run timeline | shows ordered stage progression, durations, pauses, retries, loop-backs, escalations, and completion state |
| Stage transition log | shows node enter, node exit, branch decision, retry, rollback, and approval events |
| Performance indicators | shows latency, retry count, execution duration, queue time, and tool runtime |
| Validation history | shows stage validation outcomes, blocked transitions, confidence changes, and policy decisions |
| Intermediate artifact index | shows generated artifacts, execution results, code assets, evidence packs, and export state |

Observability rules:

- all observability views are structured and queryable
- the user can filter by stage, hypothesis, execution run, error state, or approval event
- loop-backs and retries show both trigger reason and changed-state summary

## Lineage and Drill-Down Model

Every significant output supports drill-down through the full analytical lineage.

Primary lineage path:

- insight to analysis result
- analysis result to execution artifact or code
- execution artifact or code to data scope and runtime metadata
- data scope and runtime metadata to context pack
- context pack to problem frame

Drill-down capabilities:

- inspect any insight and open its supporting analysis, code, data references, context items, and originating problem statement
- inspect intermediate artifacts at every stage
- compare current stage output with prior loop iterations or alternate branches
- navigate from recommendation to insight, from insight to evidence, and from evidence to source context

## Debugging and Recovery UX

The workspace includes explicit UX for failed stages, validation failures, and execution errors.

| Debugging element | UX behavior |
| --- | --- |
| Failure banner | shows failure reason, impacted stage, severity, and whether the run is blocked, retrying, or escalated |
| Error detail panel | shows structured error code, human-readable cause, affected artifacts, and latest system action |
| Recovery actions | shows retry, fallback, reroute, modify input, branch, rollback, or request human review |
| Validation failure view | shows failed check, blocked transition, expected correction, and approval requirement |
| Execution error view | shows failed tool, runtime summary, artifact state, partial output status, and safe fallback options |

Debugging rules:

- failed stages must preserve intermediate artifacts for inspection
- validation failures must show what rule failed and what must change to proceed
- execution errors must distinguish failed, partial-success, and fallback-complete states

## Stage Flow Overview

| Stage | Primary user goal | Primary system responsibility | Primary user controls | Intent categories |
| --- | --- | --- | --- | --- |
| Intake | define the business problem correctly | normalize and validate intake | approve, reject, modify, clarify, pause | 1, 2, 6, 8, 10, 11, 18 |
| Context Building | verify working context before reasoning deepens | assemble minimal relevant context pack | approve, reject, refine, add context, remove context | 3, 4, 6, 8, 11, 16, 18 |
| Hypothesis Generation | inspect candidate explanations or questions | generate multiple structured hypotheses | inject, reject, request more, branch, pause | 2, 3, 6, 8, 12, 13, 18 |
| Hypothesis Prioritization | select the best paths to test | rank, prune, merge, and justify hypotheses | approve ranking, reorder, prune, override, expand | 2, 3, 6, 8, 12, 13, 18 |
| Analysis Planning | confirm how the system will test the hypotheses | build executable analysis plan | approve, reject, modify, override, request depth change | 2, 3, 5, 6, 8, 13, 15, 18 |
| Execution | inspect governed analytical execution | dispatch tools safely and return normalized results | approve run, cancel, retry, fallback, inspect artifacts | 2, 5, 6, 7, 15, 16, 17, 18 |
| Insight Generation | review evidence-backed findings | synthesize findings and validate support | approve, reject, request revision, request deeper analysis | 3, 6, 7, 8, 16, 17, 18 |
| Recommendation | review action-oriented outputs | convert validated insights into recommended actions | approve, reject, modify, defer, compare alternatives | 3, 6, 7, 8, 17, 18, 19 |

## Stage Interaction Pattern

Each stage follows the same enterprise interaction pattern.

| Stage interaction element | Required behavior |
| --- | --- |
| Stage progression | show previous stage, current stage, next eligible stage, and blocked transitions |
| Current system state | show what the system is doing now, which agent or validation step is active, and why |
| Decision state | show rationale, confidence, uncertainty, contradiction, and pending approval state |
| Artifacts | show stage output, intermediate artifacts, and drill-down links |
| Recovery | show retry, loop-back, branch, rollback, or escalation paths when relevant |

## Intake

### Intent basis

- core system intent
- orchestration and flow
- validation and governance
- analyst experience
- input handling and intake
- state and contract design
- human-in-the-loop

### Stage UX flow

| UX element | Definition |
| --- | --- |
| User view | structured intake form and problem-definition workspace with separate fields for business objective, analytical question, assumptions, constraints, attached documents, and unresolved ambiguity |
| System actions | validate input completeness, detect ambiguity, normalize problem statement, extract assumptions, flag conflicts, build initial machine-readable problem frame |
| Outputs shown | normalized problem frame, missing-information flags, ambiguity markers, extracted assumptions, conflicting-goal warnings, intake validation status |
| User controls | approve, reject, modify, clarify, attach files, override extracted assumptions, pause run |

### Enterprise transparency additions

- show current intake state such as drafting, validating, waiting for clarification, approved, or blocked
- show which agentic step produced the current problem frame and what confidence it has
- show validation status before transition to Context Building
- show pending approval banner when user action is required to proceed

### Required screen behavior

- the stage shows the raw user input beside the normalized problem frame
- the stage explicitly separates business objective from analytical question
- the stage shows why the system marked fields as ambiguous or incomplete
- the stage shows unresolved items that will affect downstream reasoning if left open
- the stage allows user correction before the graph advances

### Human intervention points

- refine problem statement
- correct extracted assumptions
- approve problem frame before downstream transition when required by policy
- inspect blocked reasons when intake validation fails
- reopen the stage after downstream loop-back

## Context Building

### Intent basis

- agent design
- context and memory
- validation and governance
- observability and traceability
- analyst experience
- state and contract design
- data quality and reliability
- human-in-the-loop

### Stage UX flow

| UX element | Definition |
| --- | --- |
| User view | context workspace showing business context, data context, prior outputs, reusable memory, excluded context, and provenance metadata |
| System actions | retrieve candidate context, score relevance, assemble stage-aware context pack, suppress noise, validate freshness and quality, record why context was included or excluded |
| Outputs shown | active context pack, context source list, provenance links, quality signals, freshness indicators, exclusions, selection rationale |
| User controls | approve, reject, refine, add context, remove context, request refresh, override context pack, pause run |

### Enterprise transparency additions

- show current context-building state such as retrieving, validating, awaiting approval, or blocked
- show which context-related agentic step selected or excluded each item
- show explicit quality and uncertainty indicators for every context group
- show lineage links from context items back to source documents or prior run artifacts

### Required screen behavior

- no context is hidden from the user
- each context item shows source, version, freshness, relevance reason, and intended influence on downstream decisions
- excluded context remains inspectable so the user can understand why it was not selected
- low-quality, stale, or conflicting context is visibly flagged

### Human intervention points

- include omitted context
- remove irrelevant context
- approve context pack before hypothesis generation when required
- inspect freshness, quality, or provenance failures
- reopen context after insight or execution loop-back

## Hypothesis Generation

### Intent basis

- orchestration and flow
- agent design
- validation and governance
- analyst experience
- multi-hypothesis management
- analysis depth control
- iteration and loop management
- human-in-the-loop

### Stage UX flow

| UX element | Definition |
| --- | --- |
| User view | hypothesis board with multiple candidate hypotheses displayed as structured cards rather than conversational replies |
| System actions | generate parallel hypotheses, declare evidence needs, assign initial confidence, flag overlaps, record contradictions, prepare branchable paths |
| Outputs shown | hypothesis set, rationale, evidence needed, assumptions, contradictions, confidence, branch status, lineage to intake and context |
| User controls | approve, reject, modify, inject manual hypothesis, request more hypotheses, branch, pause run |

### Enterprise transparency additions

- show active hypothesis-generation state such as generating, critiquing, awaiting review, or blocked
- show which agentic step proposed each hypothesis and whether a critic signal challenged it
- show confidence level and uncertainty reason on every hypothesis card
- show drill-down from each hypothesis to problem frame and supporting context items

### Required screen behavior

- multiple hypotheses are shown side by side
- every hypothesis shows what context informed it
- every hypothesis shows what evidence would support or weaken it
- the workspace makes clear that these are candidate analytical paths, not final answers

### Human intervention points

- add a manual hypothesis
- reject unsupported hypotheses
- request broader or narrower hypothesis generation
- inspect contradiction flags before prioritization
- trigger targeted re-generation after validation failure

## Hypothesis Prioritization

### Intent basis

- orchestration and flow
- agent design
- validation and governance
- analyst experience
- multi-hypothesis management
- analysis depth control
- iteration and loop management
- human-in-the-loop

### Stage UX flow

| UX element | Definition |
| --- | --- |
| User view | ranked hypothesis table with rank, expected value, evidence status, testability, cost-depth trade-off, and merge or prune indicators |
| System actions | score hypotheses, merge duplicates, prune weak candidates, track ranking changes, apply stopping criteria, justify prioritization decisions |
| Outputs shown | ranking, ranking rationale, evidence per hypothesis, competing alternatives, merged or pruned hypotheses, confidence changes |
| User controls | approve ranking, reorder, prune, restore, override ranking, expand a branch, request deeper analysis, pause run |

### Enterprise transparency additions

- show the current prioritization state such as ranking, merging, awaiting shortlist approval, or blocked
- show why rank changed between iterations, including evidence updates and confidence changes
- show drill-down from each ranking decision to underlying evidence and prior stage outputs
- show a pending-action banner when shortlist approval is required before planning

### Required screen behavior

- rankings must show why one hypothesis was prioritized over another
- pruned hypotheses remain visible in a collapsed state with pruning rationale
- the stage shows evidence collected per hypothesis and unresolved evidence gaps
- the stage shows when ranking changed because of new context or prior execution results

### Human intervention points

- manual reordering
- manual pruning or restoration
- approval of shortlist before planning when policy requires it
- inspect failed prioritization criteria or unsupported ranking logic
- resume from a blocked shortlist state after user action

## Analysis Planning

### Intent basis

- orchestration and flow
- agent design
- execution and data
- validation and governance
- analyst experience
- analysis depth control
- tool and execution strategy
- human-in-the-loop

### Stage UX flow

| UX element | Definition |
| --- | --- |
| User view | structured analysis-plan workspace with plan steps, target hypotheses, datasets, expected outputs, required tools, validation criteria, and depth level |
| System actions | generate analysis plan, map plan steps to hypotheses, select candidate tool paths, validate feasibility, identify data dependencies, estimate cost and depth |
| Outputs shown | plan steps, expected evidence, tool candidates, feasibility status, policy status, cost-depth signals, unresolved blockers |
| User controls | approve, reject, modify, override, request shallower or deeper plan, change branch, pause run |

### Enterprise transparency additions

- show active planning state such as drafting, validating, waiting for approval, or blocked
- show which agentic step created or critiqued each plan step
- show explicit rationale for tool choice, data scope, and depth level
- show drill-down from each plan step to the target hypothesis and expected evidence

### Required screen behavior

- the plan is shown as a structured sequence, not free-form prose
- each plan step links back to the hypothesis it is intended to test
- each plan step shows the expected evidence outcome and why it matters
- the stage surfaces blocked or risky steps before execution begins

### Human intervention points

- approve plan before critical execution
- override selected plan path
- request alternative test design
- inspect plan validation failures and blocked transitions
- reopen plan after execution failure or insight loop-back

## Execution

### Intent basis

- orchestration and flow
- execution and data
- validation and governance
- observability and traceability
- analyst experience
- tool and execution strategy
- data quality and reliability
- edge case and failure handling
- human-in-the-loop

### Stage UX flow

| UX element | Definition |
| --- | --- |
| User view | execution monitor showing execution requests, selected tool, sandbox status, data scope, progress, logs, artifacts, warnings, and normalized outputs |
| System actions | validate code and tool requests, enforce sandbox and policy, execute SQL or Python or SAS, capture metadata, normalize outputs, classify failures or partial success |
| Outputs shown | execution status, query or code summary, selected tool, runtime metadata, logs, result tables, artifact previews, warnings, structured errors |
| User controls | approve run, cancel, retry, switch to fallback path, inspect artifacts, request dry-run, pause run |

### Enterprise transparency additions

- show active execution state such as queued, validating, running, retrying, fallback, partial success, failed, or complete
- show execution timeline with stage transitions, retries, and elapsed durations
- show tool runtime metrics, data quality signals, and execution confidence posture
- show drill-down from normalized result to code summary, data scope, runtime logs, and source plan step

### Required screen behavior

- tool execution is shown as governed system activity, not hidden background work
- the user can see which tool was chosen and why
- sandbox and data access boundaries are visible
- partial execution, fallback execution, and failed execution are clearly distinguished

### Human intervention points

- approve critical execution when required
- retry or reroute after failure
- override fallback choice
- inspect structured execution error details and recovery options
- export execution artifacts and logs where allowed

## Insight Generation

### Intent basis

- agent design
- validation and governance
- observability and traceability
- analyst experience
- data quality and reliability
- edge case and failure handling
- human-in-the-loop

### Stage UX flow

| UX element | Definition |
| --- | --- |
| User view | findings workspace showing insight candidates, supporting evidence, contradictions, confidence, data quality effects, and lineage to execution outputs |
| System actions | interpret results, synthesize patterns and drivers, validate evidence sufficiency, downgrade weak claims, flag contradictions, prepare insight pack |
| Outputs shown | insight cards, evidence links, confidence score, contradiction markers, data quality warnings, open questions, validation result |
| User controls | approve, reject, request revision, request deeper analysis, compare insight candidates, pause run |

### Enterprise transparency additions

- show active insight state such as synthesizing, validating, awaiting approval, escalated, or blocked
- show which agentic step contributed interpretation, driver analysis, critique, and validation status
- show drill-down from each insight to analysis result, execution artifact, code summary, data scope, context pack, and problem frame
- show explicit uncertainty indicators when evidence is weak, contradictory, or affected by low-quality data

### Required screen behavior

- every insight must show supporting evidence and linked upstream stages
- unsupported or weak claims are visibly blocked or downgraded
- contradictions remain visible until resolved, not hidden by summary language
- insight confidence reflects both evidence quality and data quality

### Human intervention points

- approve or reject insights
- request revision of weak or contradictory findings
- trigger loop-back to context, hypothesis, or execution
- inspect validation failure reasons before approving blocked insights
- compare current insight with prior loop iterations or alternate branches

## Recommendation

### Intent basis

- agent design
- validation and governance
- observability and traceability
- analyst experience
- edge case and failure handling
- human-in-the-loop
- personalization and adaptation

### Stage UX flow

| UX element | Definition |
| --- | --- |
| User view | recommendation workspace showing recommended actions, expected impact, supporting insights, confidence, trade-offs, operational constraints, and audience framing |
| System actions | translate validated insights into action-oriented outputs, attach impact rationale, carry confidence and caveats forward, adapt presentation depth for audience |
| Outputs shown | recommendation set, linked insights, expected impact, caveats, confidence, assumptions, alternatives, audience-specific summary depth |
| User controls | approve, reject, modify, defer, compare alternatives, override recommendation, finalize run |

### Enterprise transparency additions

- show recommendation state such as drafting, awaiting review, approved, deferred, or blocked
- show drill-down from each recommendation to linked insights, supporting evidence, and originating execution outputs
- show confidence and uncertainty at recommendation level rather than hiding it behind summary language
- show pending final approval requirements before run closeout or export

### Required screen behavior

- recommendations are downstream from validated insights, never independent of them
- each recommendation links back to its supporting insight and evidence
- the user can see alternatives and why one recommendation was preferred
- audience adaptation changes presentation depth, not evidentiary rigor

### Human intervention points

- approve final recommendations
- reject unsupported recommendations
- request alternative recommendations or defer publication
- inspect blocked or downgraded recommendations caused by weak evidence
- export structured outputs after approval where policy allows

## Output and Consumption UX

Outputs are presented as structured, drillable deliverables rather than narrative dumps.

| Output requirement | UX behavior |
| --- | --- |
| Structured | outputs use cards, tables, matrices, status strips, and linked evidence blocks |
| Visual where needed | rankings, confidence, lineage, and performance use visual indicators and compact charts where helpful |
| Drillable | every output can open supporting artifacts and upstream lineage |
| Exportable | approved outputs can be exported as structured packages with linked evidence and trace metadata |

Output consumption rules:

- recommendation and insight views support executive-depth and analyst-depth presentation without changing the underlying traceability
- exported outputs preserve linkage to problem frame, context pack, hypotheses, execution artifacts, and validation state

## Approval and Blocked-Flow UX

The workspace must enforce human-in-the-loop controls at required checkpoints.

| UX state | Required behavior |
| --- | --- |
| Pending approval | show explicit banner, blocking reason, pending decision owner, and allowed actions |
| Blocked flow | prevent silent transition and show what action is required to resume |
| Escalated flow | show why the run was escalated, what evidence is in dispute, and which recovery paths remain |
| Completed with caveats | show residual uncertainty, deferred issues, and limits on finalization or export |

## Context Visibility Model

| UX requirement | Derived intent |
| --- | --- |
| show active context pack at every stage | Sections 4, 8, 11 |
| show why each context item was selected | Sections 4, 7, 8 |
| show provenance, version, freshness, and exclusions | Sections 4, 6, 7, 16 |
| show how context influenced a hypothesis, plan, or insight | Sections 3, 4, 7, 8, 12 |
| prevent hidden context from affecting decisions | Sections 1, 4, 6, 8, 11 |

## Multi-Hypothesis UX Model

| UX requirement | Derived intent |
| --- | --- |
| display multiple hypotheses in parallel | Sections 2, 12 |
| show ranking and ranking updates | Sections 12, 13, 14 |
| show evidence per hypothesis | Sections 6, 7, 12 |
| allow user selection, pruning, and override | Sections 8, 12, 18 |
| show lineage and branch status per hypothesis | Sections 2, 7, 12, 14 |

## Iteration and Loop UX Model

| UX requirement | Derived intent |
| --- | --- |
| show when the system is looping or re-analyzing | Sections 2, 14, 17 |
| show why the loop was triggered | Sections 6, 7, 14, 17 |
| show what changed since the prior pass | Sections 7, 11, 14 |
| support selective re-execution of stages | Sections 2, 14, 17 |
| show retry counts, fallback usage, and rollback state | Sections 2, 7, 15, 17 |

Loop-back UX behavior:

- each loop-back event shows trigger reason such as contradictory result, low confidence, weak evidence, failed execution, stale context, or analyst override
- each loop-back event shows changed inputs, changed context, changed rankings, or changed execution strategy
- each loop-back event preserves prior stage outputs for side-by-side comparison

## Human-in-the-Loop Control Model

| Control point | User actions | Derived intent |
| --- | --- | --- |
| Problem refinement | approve, reject, modify, clarify | Sections 10, 18 |
| Hypothesis selection | approve, reject, inject, prune, override | Sections 8, 12, 18 |
| Plan approval | approve, reject, modify, override | Sections 6, 15, 18 |
| Insight validation | approve, reject, request revision, loop back | Sections 6, 8, 17, 18 |
| Final recommendation review | approve, reject, modify, defer | Sections 8, 18, 19 |

## Trace and Transparency Requirements

- the workspace must show what stage is active, what the system is doing, and what decision is pending
- every visible stage output must link to upstream intake, context, hypothesis, plan, execution, or evidence artifacts
- every user intervention must be shown as an explicit event in the stage history
- every stage must expose confidence, contradictions, and validation status where relevant
- no UX behavior should imply hidden autonomous decision-making outside the stage flow
