# UX/UI Design Skills Framework

An open-source, machine-readable UX documentation suite built for human designers and AI agents. Powered by [Astro Starlight](https://starlight.astro.build/) so content stays markdown-first and RAG-friendly.

## Sections

| Section | Path | Purpose |
| --- | --- | --- |
| Foundations | `src/content/docs/foundations` | Core principles, including The UX Constitution |
| Patterns | `src/content/docs/patterns` | Reusable interaction and layout patterns |
| Components | `src/content/docs/components` | UI building blocks |
| Design Ops | `src/content/docs/design-ops` | Process, governance, and delivery |

## Local development

```bash
npm install
npm run dev -- --port 4325 --host
```

Open [http://127.0.0.1:4325](http://127.0.0.1:4325).

### Useful scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Starlight dev server |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
