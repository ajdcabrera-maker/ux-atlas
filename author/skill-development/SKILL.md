---
name: skill-development
description: Run the Atlas skill development workflow after the partner has chosen which skill to add or improve. Use when they say to generate, improve, update, extend, or fold into a skill; run skill development; start the workflow for a named skill; or accept a choice that would add or edit a skill file. Covers research, draft, generate, discoverability, and smoke for public skills under skills/ and for other author skills under author/ — not for editing this workflow skill itself. Do not run while they are only exploring which gap to fill. Phases are ordinal. Forward skips are forbidden. Backward jumps are allowed and clear later accepts. Do not deploy. After smoke, ask whether to ship. Shipping means the real skill files are ready; deploy stays a separate explicit choice. Author-only internal workflow. Never ship this skill in the npm package, the project download, the public site, the nav, or the skill catalog. The public must not consume it.
metadata:
  updated: "2026-09-26"
  updatedBy: Aaron Cabrera
---

## Author only

This skill is an internal workflow for the authors of UX Atlas. It is not a visitor skill. The public must not see it, download it, or install it.

This file lives at `author/skill-development/SKILL.md`.

Do not put it under `skills/`. Do not put it under `optional/`. Do not add it to `site/src/lib/skill-catalog.ts`. Do not give it a site page, a nav item, or any showcase on atlas.aarondesign.rocks. Do not list it in package `files`. Do not include it in the project-folder zip. Do not mention it on the home, install, download, or changelog pages as a product feature.

Wire it only for this repo: the root `AGENTS.md` / `CLAUDE.md` that authors use when working on UX Atlas may point at `author/**/SKILL.md`. The install package instructions must not.

Discoverability for **this** skill means proving the negatives above. Discoverability for a **public** skill this workflow creates still means catalog, site page, package, and zip.

## Outside this skill

The partner explores where a skill sits in Atlas and which gap to fill. That conversation does not run this skill. Name, section, and trigger words may be proposed there, but the workflow has not started.

## Do not run this skill on itself

When the partner asks to improve, update, or fix **this** workflow skill (`author/skill-development`), edit that file directly. Do not open Research, Draft, Generate, Discoverability, or Smoke for this file. Running the workflow to change the workflow is a race and is forbidden.

## Trigger

Start this skill when all of the following are true.

1. The partner has decided which skill to add, or which existing skill to improve — other than this workflow skill.
2. They give a go signal. Go signals include, and are not limited to:
   - "generate that skill", "run skill development", "start the workflow for …"
   - "improve …", "update …", "extend …", "fold into …", "change the pipeline", "add to Define"
   - Accepting a Choice option whose outcome is adding or editing a skill file under `skills/` or `author/` (except this workflow skill)

Kickoff is the trigger. It is not a phase inside this skill.

### Hard rules

- Any add or edit under `skills/**/SKILL.md` runs this skill first. There is no small-patch exemption.
- Any add or edit under `author/**/SKILL.md` **except** `author/skill-development/SKILL.md` runs this skill first.
- Do not write those skill files in kickoff, in ordinary advice, or as a "quick fold." Open this skill at Research (or the correct phase on a return) and name the target skill in that turn.
- When you present a Choice whose option would change a skill file, that option must say to run skill development for the named skill. Do not offer "just edit the file" or "fold in now — no workflow" as a path around this skill.

## How to move

The phases are Research, Draft, Generate, Discoverability, and Smoke, in that order. Ship choice follows Smoke. Deploy is not part of this skill.

Phases are ordinal. You cannot open a later phase until every earlier phase has been accepted in this run. You cannot go from Research to Generate. Draft must be accepted before Generate.

Backward jumps are allowed. From any later phase, the partner may return to an earlier one. Name the return. Clear every accept after that phase. Example: Smoke returns to Research. Draft, Generate, Discoverability, and Smoke must run again.

Do one phase per turn in guided mode. End the turn with the work from that phase and one decision. Use the constitution's choice rules. Host picker or Choice block, never both.

When the only decision is accept or correct, the options are these.

- Accept the phase. It opens the next open phase on the next turn.
- Correct this phase. It stays on that phase.

If they name an earlier phase, return there and clear later accepts.

## 1. Research

Gather the durable UX canon for this skill. Prefer standards and principles designers already trust. Cite sources that are highly relatable to the job of the skill. Do not invent metrics, quotes, or studies.

Say what the canon implies for the skill body. Say what the constitution already owns so this skill does not repeat it.

Wait for the partner to accept the research cut before Draft.

## 2. Draft

This is the critical structure gate. Do not only paste a skill body.

In the same turn, do all of the following.

1. **Rationale.** How the draft was shaped from the canon and from Atlas.
2. **Trigger design.** The exact description phrases. When the skill runs. When it must not run. Why that boundary.
3. **Tandem.** How it collaborates with existing skills. What it reads, what it hands off, which pipeline stage it belongs to if any.
4. **Unify or new.** Whether to improve an existing skill instead of adding a file. Prefer unify when overlap is high. Say which file would change.
5. **Temp markdown.** Write the full proposed `SKILL.md` to a temporary file under `_drafts/` so the partner can Preview it. Do not rely on a chat paste as the review surface.

Wait for Accept on the draft. Correct keeps Draft open.

On Accept of Draft, before Generate starts: delete the temporary markdown for this skill. If the partner abandons the workflow on Draft, delete that temporary markdown too.

If Draft concludes "improve skill X" instead of a new file, Generate edits that skill. Discoverability checks still run for that skill.

## 3. Generate

Write or update the real skill file only after Draft was accepted and its temp file was deleted.

For a **public** Atlas skill:

- New skill: `skills/<name>/SKILL.md`
- Improve existing: edit that skill's `SKILL.md`
- Register or update `site/src/lib/skill-catalog.ts` when the site must list it
- Catalog row before or with the `SKILL.md` write so the site loader does not fail mid-reload

For **other** author skills: `author/<name>/SKILL.md` only. No catalog row. No package entry.

Do not invent a one-off pattern outside Atlas skill conventions. Match frontmatter, disclosure description, and body tone to sibling skills.

## 4. Discoverability

**Public skill under development.** Confirm it is findable on the site and in distribution.

- Catalog row matches `name`
- Site build exposes `/<section>/<name>/`
- Package ships `skills/`
- Project download zip includes `skills/<name>/SKILL.md`

**Author skill under development (not this workflow file).** Confirm it is absent from every visitor surface.

- Not under `skills/` or `optional/`
- Not in `skill-catalog.ts`
- No site route, no nav entry, no public page
- Not named on home, install, download, or changelog as something visitors use
- Not in package `files`
- Not in the project-folder zip
- Root author `AGENTS.md` may reference `author/**/SKILL.md`; `instructions/AGENTS.md` must not

Fix gaps in this phase. Do not move to Smoke until these pass, or the partner explicitly accepts a recorded exception.

## 5. Smoke

Check that the skill is called and behaves as expected. Do not judge the quality of the design outcome. The partner owns outcome quality.

Use the pilot prompt until a stronger smoke skill or agent exists:

> Design how an existing customer cancels a paid subscription in our web app. They should understand what they lose, confirm, and get a clear next step if they change their mind. Don’t jump straight to visual polish — work through it properly.

Pass when all of these hold.

- The intended skill is selected when the prompt should hit it (alone or inside the pipeline stage that owns it)
- Stops use one Choice (picker or block, never both)
- The skill does not start the design pipeline when its description says it must not
- No product change before the constitution's implement Choice

Fail returns to Draft, or to Research when a canon gap caused the miss.

## After Smoke

Ask whether the skill work is ready to ship as repo files. Options: Ship the skill files, or Keep iterating.

Ship here means the skill and catalog changes are agreed. It does not deploy the site.

Deploy is a separate explicit request. Never deploy as part of this skill. There is no exemption.

## Record

When the partner asks, give them the skill name, new vs unify, author-only vs public, sources, trigger phrases, tandem decisions, discoverability result, smoke result, and open questions.
