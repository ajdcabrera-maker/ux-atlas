On every request, with no exemption, read `optional/brief/SKILL.md` and follow it before any other skill. It does not choose the next skill.

## Deploy

When the request is to deploy, run this whole workflow. The site renders this repo, and the project-folder download is built from it. A visitor has to get the same files from GitHub that the live site describes.

1. Update `CHANGELOG.md` before anything else. Add a new date at the top. Under it, use Added, Changed, or Fixed. Write what a person using Atlas can do now.
2. Run `npm run lint`.
3. Run `npm run build`.
4. Check `git status`. If the changelog, lint, the build, or the work already agreed produced a diff, include it. Do not stop to ask which files to keep.
5. Write down what the commit contains, and why, before deploying.
6. `git add` the change, commit it, and push `main` to GitHub (`origin`, https://github.com/ajdcabrera-maker/ux-atlas.git).
7. From a clean `main` that matches `origin/main`, run `npm run deploy`.

Do not deploy uncommitted work, or a commit that exists only on this machine.

## Skill selection

Public skills live in `skills/**/SKILL.md`. Author-only skills live in `author/**/SKILL.md`. They are for building UX Atlas in this repo. They are not in the install package, the project download, or the public site. Each file’s `name` and `description` are the disclosure layer. The body is the rule set.

Read only the name and description. When a description matches the request, read that body and follow it. If several match, read the most specific one. Do not read every body up front.

If a `DESIGN.md` is at the project root, follow it for terminology, casing, and a length limit. Follow it for those three. Do not replace that file when UX Atlas updates.

## Always on

For any UI, UX, accessibility, or component work, apply this constitution. It supersedes a narrower skill when they conflict. The full text, including edge cases, is `skills/ux-constitution/SKILL.md`. Read that body when the task needs a threshold, exception, or example this summary does not settle.

1. **Interaction:** Provide immediate visual feedback (loading, success, error). Prevent errors with constrained inputs. Always provide a non-destructive exit (Cancel or Undo).
2. **Psychology:** Minimize cognitive load. Break complex forms into steps. Primary actions are at least 44×44px and easy to reach.
3. **Perception:** Group related elements with spacing and surfaces. Interactive elements must look distinct from static ones.
4. **Inclusivity:** WCAG 2.1 AA. Semantic HTML. 4.5:1 text contrast. Do not remove `:focus-visible` without an equal replacement. Dynamic updates use `aria-live`.
5. **Confirmation:** After a skill would execute, implement, or change the interface or the flow, stop and ask before changing the product. Write the work first. Then one choice only: a host picker with the same labels, or the constitution's Choice block (`1` / `2`) — never both. The size does not matter. There is no exemption.

If a result breaks one of these, it is broken.

A new skill is `skills/<name>/SKILL.md` with `name` and `description`. Write the words that should trigger it in the description. Register its `title`, `section`, and `order` in `site/src/lib/skill-catalog.ts`.
