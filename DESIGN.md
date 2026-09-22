# DESIGN.md — UX Atlas design contract

Visual and component contract for the docs site that will live at **atlas.aarondesign.rocks**, a sibling of the portfolio at **aarondesign.rocks**.

Tokens match the portfolio on purpose. If this file, `src/styles/tokens.css`, and a page disagree, fix them in one change.

---

## Read order

1. **`DESIGN.md`** (this file)
2. **`src/styles/tokens.css`**
3. **`src/ds/*`**
4. **`src/content/docs/*`** — published rules (the UX Constitution and later sections)
5. **`src/pages/*`** — compositions

The portfolio repo remains the reference for product UI on aarondesign.rocks. Do not invent a second palette here.

---

## Product mood

**Terminal / phosphor on canvas**. Dark page, emerald only for code. No purple glow, no cream editorial, no card-heavy dashboards.

---

## Hosting

| | Portfolio | This site |
|--|-----------|-----------|
| URL | `https://aarondesign.rocks` | `https://atlas.aarondesign.rocks` |
| Worker | `aaron-cabrera-portfolio` | `ux-atlas` |
| Build | `astro build` → `dist/` | same |
| Deploy | `npm run deploy` (Wrangler assets) | same |

Attach `atlas.aarondesign.rocks` to the `ux-atlas` worker in Cloudflare. Do not point this worker at the apex domain.

`site` in `astro.config.mjs` and `url` in `src/lib/site.ts` must stay the same hostname.

---

## Tokens

Defined in `src/styles/tokens.css` via Tailwind v4 `@theme`. Same roles and hex values as the portfolio.

| Role | Token | Utility examples | Hex |
|------|-------|------------------|-----|
| Page background | `canvas` | `bg-canvas` | `#0a0a0a` |
| Elevated surface | `canvas-elevated` | `bg-canvas-elevated` | `#171717` |
| Sticky chrome | `canvas-subtle` | `bg-canvas-subtle` | `#0a0a0acc` |
| Primary text | `ink` | `text-ink` | `#f5f5f5` |
| Secondary / body | `ink-muted` | `text-ink-muted` | `#a3a3a3` |
| Tertiary / meta | `ink-subtle` | `text-ink-subtle` | `#737373` |
| Default border | `line` | `border-line` | `#262626` |
| Hover border | `line-strong` | `border-line-strong` | `#404040` |
| Soft border | `line-soft` | `border-line-soft` | `#262626cc` |
| Code accent | `accent` | `text-accent` | `#6ee7b7` |
| Accent soft | `accent-muted` | `border-accent-muted` | `#34d399cc` |
| CTA fill | `cta` | `bg-cta` | `#f5f5f5` |
| CTA text | `cta-fg` | `text-cta-fg` | `#0a0a0a` |
| Control radius | `control` | `rounded-control` | `0.5rem` |
| Card radius | `card` | `rounded-card` | `1rem` |
| Pill radius | `pill` | `rounded-pill` | `9999px` |
| Content width | `content` | `max-w-content` | `72rem` |
| Grid gap | `grid` | `gap-grid` | `1rem` |

### Rules

- Do not introduce new hex values in pages. Extend `tokens.css` and this table first, and only if the portfolio tokens change too.
- Emerald/`accent` is for code and system signals. Doc prose uses `.docs-prose` so inline code picks up accent.
- Pages use semantic tokens. No raw `neutral-*` or `emerald-*` utilities in `src/`.

---

## Library (`src/ds/`)

| Primitive | File | Use |
|-----------|------|-----|
| `Container` | `Container.astro` | Page width + `px-6` |
| `Eyebrow` | `Eyebrow.astro` | Uppercase section labels |
| `Surface` | `Surface.astro` | Directory cards (`interactive` when the card is a link) |

Chrome: `SiteHeader`, `SiteFooter`, `SiteLayout`, `BaseLayout`.

Constants: `src/lib/site.ts` — `name`, `url`, `nav`.

---

## Typography

| Level | Classes | Usage |
|-------|---------|--------|
| Page H1 | `text-3xl sm:text-5xl font-semibold tracking-tight text-ink` | Home, doc titles |
| Section H2 | `text-2xl sm:text-3xl font-semibold tracking-tight text-ink` | Home sections |
| Card title | `text-lg font-semibold tracking-tight text-ink` | Directory cards |
| Lead | `text-lg sm:text-xl text-ink-muted leading-relaxed` | Intros |
| Body | `text-sm text-ink-muted leading-relaxed` | Card descriptions |
| Doc body | `.docs-prose` | Markdown in `src/content/docs` |

---

## Pages

| Route | File | Notes |
|-------|------|--------|
| `/` | `src/pages/index.astro` | Directory of published docs |
| `/:section/:slug` | `src/pages/[...slug].astro` | One route per content entry |
| `/404` | `src/pages/404.astro` | Worker `not_found_handling` |

Content lives in `src/content/docs/<section>/`. A new markdown file with `title` and `description` is a new page. Add a header link in `site.nav` only when it should stay in the chrome.
