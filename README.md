# UX Atlas

UX skills for agents, and a site that previews them.

## Skills

Each skill is a folder:

```
skills/<name>/SKILL.md
```

`name` and `description` in the frontmatter tell an agent when to load the file. The body is the rule set. Install this package and point a project rule at `node_modules/ux-atlas/skills/**/SKILL.md`.

```bash
npm install github:ajdcabrera-maker/ux-atlas
```

## Site

The Astro app in `site/` renders those files at [atlas.aarondesign.rocks](https://atlas.aarondesign.rocks). `site/src/lib/skill-catalog.ts` holds each skill’s title, section, and order. Section and name become the URL, so the constitution is `/foundations/ux-constitution`.

```bash
npm run dev
npm run build
npm run deploy
```
