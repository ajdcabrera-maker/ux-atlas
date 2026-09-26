# UX Atlas

UX skills for agents, and a site that previews them.

## Skills

Each skill is a folder:

```
skills/<name>/SKILL.md
```

`name` and `description` in the frontmatter tell an agent when to load the file. The body is the rule set. `metadata.updated` and `metadata.updatedBy` record when the rule set last changed and who changed it. They are not part of that trigger.

```bash
npm install github:ajdcabrera-maker/ux-atlas
```

The install writes a pointer at the end of the project's `AGENTS.md` and `CLAUDE.md`. It does not replace the rest of those files. The pointer sends the agent to `node_modules/ux-atlas/instructions/AGENTS.md` and to `node_modules/ux-atlas/skills/**/SKILL.md`. `npm update ux-atlas` replaces the skills. The pointer stays. If install scripts are disabled, run `npx ux-atlas init`.

A `DESIGN.md` at the project root stays the project's file. The package update does not replace it.

## Site

The Astro app in `site/` renders those files at [atlas.aarondesign.rocks](https://atlas.aarondesign.rocks). `site/src/lib/skill-catalog.ts` holds each skill’s title, section, and order. Section and name become the URL, so the constitution is `/foundations/ux-constitution`.

```bash
npm run dev
npm run build
```

When the request is to deploy, run this whole workflow. The site renders this repo, and the project-folder download is built from it. A visitor has to get the same files from GitHub that the live site describes.

1. Update `CHANGELOG.md` before anything else. Add a new date at the top. Under it, use Added, Changed, or Fixed. Write what a person using Atlas can do now.
2. Run `npm run lint`.
3. Run `npm run build`.
4. Check `git status`. If the changelog, lint, the build, or the work already agreed produced a diff, include it. Do not stop to ask which files to keep.
5. Write down what the commit contains, and why, before deploying.
6. `git add` the change, commit it, and push `main` to GitHub (`origin`, https://github.com/ajdcabrera-maker/ux-atlas.git).
7. From a clean `main` that matches `origin/main`, run `npm run deploy`.

Do not deploy uncommitted work, or a commit that exists only on this machine.
