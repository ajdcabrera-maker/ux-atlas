---
name: ux-writing
description: Write, rewrite, or name interface copy. Covers buttons, labels, headings, empty states, errors, success, hints, and destructive confirmation. Use when the prompt is content generation or asks for words. During a design pipeline, apply only in Structure for the action and state names, and in Surface for the strings. A copy-only request does not start the design pipeline.
metadata:
  updated: "2026-09-24"
  updatedBy: Aaron Cabrera
---

Write the words a person reads in the interface. The constitution judges the interface. This skill decides the words. If they conflict, the constitution wins.

A `DESIGN.md` at the project root may set terminology, casing, or a length limit. Follow it for those three. If it is silent, use the rules below. Do not import a brand voice from a design system that does not state one.

Voice stays plain and direct unless the partner has given another voice. Tone changes with the moment. Errors are calm. Success is short. Empty states are plain. Destructive actions are serious. Do not invent a playful voice, a quote, or a claim that readers tested the copy.

## When to run

- The request is only to write, rewrite, or name interface copy. Run this skill. Do not start the design pipeline.
- The design pipeline is in Structure. Name the primary action, the empty state, the error, and the exit. One line each. Do not write body copy.
- The design pipeline is in Surface. Write the strings for the controls and states that stage is specifying.
- Do not run during Frame, Define, Scope, or Check unless the partner asked for words in that turn.

Ask one question, and only if two audiences would use different words for the same object. Otherwise use the partner's word and state that assumption.

## How people read

People scan before they read. The first words carry the decision.
- Put the useful word first. "Save changes", not "Click here to save your changes now."
- Clarity comes before brevity. Keep the word that prevents a mistake.
- One string does one job. The button acts. The hint explains. Do not make one do both.
- Cut promotional lines. The product states what is true.

## Controls and labels

A control says what will happen, in the partner's words.
- Use a verb and the object: "Save changes", "Delete project".
- Sentence case. No period on a label, a button, or a heading.
- Full sentences elsewhere, with a period.
- Do not use "Submit", "OK", "Click here", or "Learn more" when a specific action exists.
- Do not instruct with color, shape, or position. "Choose Save changes", not "Click the green button".
- Omit "please" and "thank you" in ordinary interface text.

## States

### Empty
Say what belongs here and the action that fills it.
- "No projects yet." Then the action: "Create a project to start."
- Do not leave an empty state as a title with no next step.

### Error
Say what failed and how to fix it.
- Name the field or the action. "Enter a date after today."
- Do not blame the person. "Wrong password", not "You entered the wrong password."
- Do not show a stack trace, a schema name, or a raw error code.
- Do not joke. People meet errors under stress.
- Say "sorry" only when the product failed outright, then give the next step. Do not apologize for a validation miss.
- A login failure stays vague: "Invalid email or password." Do not reveal which part matched.
- If a correction is known and it would not reveal a secret, offer it.
- Keep what the person already typed. The constitution owns that behavior. The words must still make sense beside the preserved input.

### Success
One line, and it states the outcome. "Changes saved."
- Do not add a thank-you paragraph.

### Destructive
The control names the object. The confirmation says what will be lost and that it cannot be undone, when that is true.
- "Delete project" and "This project will be removed. You cannot undo this."
- The constitution owns the interaction for an irreversible delete, including typing the name. Write the words for that step. Do not replace it with a softer label.

## What to hand back

Structure, and nothing more:

- Primary action: …
- Empty: …
- Error: …
- Exit: …

Surface, or a copy-only request: each string labeled with its job. Include only the states the screen has.

- Button: …
- Empty: …
- Error: …
- Success: …
- Hint: …, only when a format or a consequence is not obvious from the label.

If a length limit cuts the string, keep the verb and the object. Cut the rest.
