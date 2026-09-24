# UX Atlas

UX skills for agents, and a site that previews them.

## Skills

Each skill is a folder:

```
skills/<name>/SKILL.md
```

`name` and `description` in the frontmatter tell an agent when to load the file. The body is the rule set. `metadata.updated` and `metadata.updatedBy` record when the rule set last changed and who changed it. They are not part of that trigger. Install this package and point a project rule at `node_modules/ux-atlas/skills/**/SKILL.md`.

```bash
npm install github:ajdcabrera-maker/ux-atlas
```

## Site

The Astro app in `site/` renders those files at [atlas.aarondesign.rocks](https://atlas.aarondesign.rocks). `site/src/lib/skill-catalog.ts` holds each skill’s title, section, and order. Section and name become the URL, so the constitution is `/foundations/ux-constitution`.

```bash
npm run dev
npm run build
```

Deploy only after the change is on GitHub `main`. The site renders this repo, and the project-folder download is built from it. A visitor has to get the same files from GitHub that the live site describes.

1. Commit the change.
2. Push `main` to GitHub (`origin`, https://github.com/ajdcabrera-maker/ux-atlas.git).
3. From a clean `main` that matches `origin/main`, run `npm run deploy`.

Do not deploy uncommitted work, or a commit that exists only on this machine.
