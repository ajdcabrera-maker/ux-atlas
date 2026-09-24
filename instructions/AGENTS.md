Skills live in `node_modules/ux-atlas/skills/**/SKILL.md`. Each file's `name` and `description` are the disclosure layer. The body is the rule set.

If a `DESIGN.md` is at the project root, follow it for terminology, casing, and a length limit. Follow it for those three. Do not replace that file when UX Atlas updates.

## Always on

For any UI, UX, accessibility, or component work, apply this constitution. It supersedes a narrower skill when they conflict. The full text, including edge cases, is `node_modules/ux-atlas/skills/ux-constitution/SKILL.md`. Read that body when the task needs a threshold, exception, or example this summary does not settle.

1. **Interaction:** Provide immediate visual feedback (loading, success, error). Prevent errors with constrained inputs. Always provide a non-destructive exit (Cancel or Undo).
2. **Psychology:** Minimize cognitive load. Break complex forms into steps. Primary actions are at least 44×44px and easy to reach.
3. **Perception:** Group related elements with spacing and surfaces. Interactive elements must look distinct from static ones.
4. **Inclusivity:** WCAG 2.1 AA. Semantic HTML. 4.5:1 text contrast. Do not remove `:focus-visible` without an equal replacement. Dynamic updates use `aria-live`.

If a result breaks one of these, it is broken.

## Task skill

1. Read only the `name` and `description` frontmatter of the other `SKILL.md` files. Do not read every body up front.
2. If one description matches the task, read that body and follow it together with the constitution above.
3. If the request only asks to write, rewrite, or name interface copy, and does not ask to change the flow or the screen, read `node_modules/ux-atlas/skills/ux-writing/SKILL.md`. Do not start the design pipeline.
4. If the task is to design, redesign, critique, or add a screen, flow, or feature, read `node_modules/ux-atlas/skills/design-pipeline/SKILL.md` and follow its guided or express rule. A narrower skill applies only inside the stage that skill names.
5. If several match and the pipeline does not, read the most specific one.
6. If none match, the constitution is enough. Do not load the rest of the library just in case.
