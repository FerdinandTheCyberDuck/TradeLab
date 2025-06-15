# workflow_state.md

_Last updated: 2025-01-16_

## State

Phase: INIT  
Status: READY  
CurrentItem: null

## Plan

<!-- The AI fills this in during the BLUEPRINT phase -->

## Rules

> **Keep every major section under an explicit H2 (`##`) heading so the agent can locate them unambiguously.**
> Global Rules:
> Act as an expert AI programming assistant focused on producing clear, readable code according to the project’s defined language and standards (see ## Tech Stack and ## Critical Patterns & Conventions). Maintain a thoughtful, nuanced, and accurate reasoning process.

Follow the user’s requirements for tasks precisely and completely:

Before writing any implementation code, enter the BLUEPRINT phase.
Think step-by-step: Generate a detailed plan in the ## Plan section of workflow_state.md, using pseudocode or clear action descriptions relevant to the project’s language/framework.
Explicitly request user confirmation of the plan by setting State.Status = NEEDS_PLAN_APPROVAL before proceeding to the CONSTRUCT phase.
Construct Phase:

Adhere strictly to the approved plan.
Generate code that is correct, up-to-date, bug-free, functional, secure, performant, and efficient, following standards defined in this project_config.md.
Prioritize code readability over premature optimization.
Ensure all requested functionality from the plan is fully implemented.
Crucially: Leave NO TODO comments, placeholders, or incomplete sections. All code generated must be complete and functional for the planned step.
Verify code thoroughly before considering a step complete.
Include all necessary imports/dependencies and use clear, conventional naming appropriate for the project’s language.
Be concise in logs (## Log section of workflow_state.md) and when reporting status or requesting input from the user. Minimize extraneous prose.

End of Rules

### [PHASE: ANALYZE]

1. Read **project_config.md**, relevant code & docs.
2. Summarize requirements. _No code or planning._

### [PHASE: BLUEPRINT]

1. Decompose task into ordered steps.
2. Write pseudocode or file-level diff outline under **## Plan**.
3. Set `Status = NEEDS_PLAN_APPROVAL` and await user confirmation.

### [PHASE: CONSTRUCT]

1. Follow the approved **## Plan** exactly.
2. After each atomic change:
   - run test / linter commands specified in `project_config.md`
   - capture tool output in **## Log**
3. On success of all steps, set `Phase = VALIDATE`.

### [PHASE: VALIDATE]

1. Rerun full test suite & any E2E checks.
2. If clean, set `Status = COMPLETED`.
3. Trigger **RULE_ITERATE_01** when applicable.

---

### RULE_INIT_01

Trigger ▶ `Phase == INIT`  
Action ▶ Ask user for first high-level task → `Phase = ANALYZE, Status = RUNNING`.

### RULE_ITERATE_01

Trigger ▶ `Status == COMPLETED && Items contains unprocessed rows`  
Action ▶

1. Set `CurrentItem` to next unprocessed row in **## Items**.
2. Clear **## Log**, reset `Phase = ANALYZE, Status = READY`.

### RULE_LOG_ROTATE_01

Trigger ▶ `length(## Log) > 5 000 chars`  
Action ▶ Summarise the top 5 findings from **## Log** into **## ArchiveLog**, then clear **## Log**.

### RULE_SUMMARY_01

Trigger ▶ `Phase == VALIDATE && Status == COMPLETED`  
Action ▶

1. Read `project_config.md`.
2. Construct the new changelog line: `- <One-sentence summary of completed work>`.
3. Find the `## Changelog` heading in `project_config.md`.
4. Insert the new changelog line immediately after the `## Changelog` heading and its following newline (making it the new first item in the list).

---

## Items

| id  | description | status |
| --- | ----------- | ------ |

## Log

<!-- AI appends detailed reasoning, tool output, and errors here -->

## ArchiveLog

<!-- RULE_LOG_ROTATE_01 stores condensed summaries here -->
