---
version: alpha
name: UX Atlas
description: Docs site contract for atlas.aarondesign.rocks. Color, type, radius, and spacing values live in the design-tokens package and are referenced below.
components:
  eyebrow:
    textColor: "{colors.ink-subtle}"
    typography: "{typography.label-caps}"
  surface:
    backgroundColor: "{colors.canvas-elevated}"
    rounded: "{rounded.card}"
  surface-border:
    backgroundColor: "{colors.line}"
  surface-interactive-hover:
    backgroundColor: "{colors.canvas-elevated}"
  surface-interactive-hover-border:
    backgroundColor: "{colors.line-strong}"
  sticky-chrome:
    backgroundColor: "{colors.canvas-subtle}"
  code-inline:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.accent}"
    rounded: "{rounded.control}"
  divider:
    backgroundColor: "{colors.line}"
  container:
    padding: 24px
---

# DESIGN.md

Docs site contract for **atlas.aarondesign.rocks**. `colors`, `typography`, `rounded`, and `spacing` are defined in the [`design-tokens`](https://github.com/ajdcabrera-maker/design-tokens) package. This file uses the same schema and references those tokens. It does not restate their values. `src/styles/tokens.css` imports `design-tokens/tokens.css`.

## Overview

**Mood:** terminal / phosphor on canvas. Dark page, emerald only for code. No purple glow, no cream editorial, no card-heavy dashboards.

## Colors and type

Use the semantic utilities from the shared tokens (`bg-canvas`, `text-ink-muted`, `border-line`, `text-accent`, `bg-cta`). Accent is for code and system signals, including `.docs-prose` inline code. Do not add hex values in this repo.

Page type uses the shared scale:

| Level | Token | Usage |
|-------|--------|--------|
| Page H1 | `typography.display` | Home and doc titles |
| Section H2 | `typography.headline-lg` | Home sections |
| Card title | `typography.headline-sm` | Directory cards |
| Lead | `typography.body-lg` | Intros |
| Body | `typography.body-sm` | Card descriptions |

## Components

Primitives live in `src/ds/`. Chrome composes them from `src/components/` and `src/layouts/`. Constants (`name`, `url`, `nav`) live in `src/lib/site.ts`.

| Primitive | File | Role |
|-----------|------|------|
| `Container` | `Container.astro` | Section width + `px-6` |
| `Eyebrow` | `Eyebrow.astro` | Uppercase section labels |
| `Surface` | `Surface.astro` | Directory cards; `interactive` when the card is a link |

## Do's and Don'ts

- Do add a new color, type size, radius, or spacing value in `design-tokens` before using it here.
- Don't copy those values into this file or into `tokens.css`.
- Do use semantic token utilities in pages. No raw `neutral-*` or `emerald-*`.
- Don't use accent as a decorative wash. It is for code and system signals.

## Pages

| Route | File | Notes |
|-------|------|--------|
| `/` | `src/pages/index.astro` | Directory of published docs |
| `/:section/:slug` | `src/pages/[...slug].astro` | One route per content entry |
| `/404` | `src/pages/404.astro` | Worker `not_found_handling` |

Skills live in `skills/<name>/SKILL.md` at the repo root. A skill’s frontmatter is `name` and `description`. `src/lib/skill-catalog.ts` holds `title`, `section`, and `order` for the site, keyed by `name`. A section’s place is the lowest order among its skills. The site builds `/{section}/{name}`, so `ux-constitution` in the foundations section publishes at `/foundations/ux-constitution`. The sidenav reads that catalog on skill pages. The homepage has no sidenav. Header, burger, and footer read `nav` in `src/lib/site.ts`. `to: 'first-skill'` opens the skill with the lowest order.

**Hosting:** `atlas.aarondesign.rocks` on the `ux-atlas` worker. `site` in `astro.config.mjs` and `url` in `src/lib/site.ts` stay on that hostname.
