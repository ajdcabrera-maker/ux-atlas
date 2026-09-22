# UX Atlas

Machine-readable UX documentation for designers and agents. Same stack and visual system as the portfolio at [aarondesign.rocks](https://aarondesign.rocks). Planned host: [atlas.aarondesign.rocks](https://atlas.aarondesign.rocks).

## Stack

Astro, MDX, Tailwind CSS v4, Cloudflare Workers (Wrangler static assets).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Static build to `./dist/` |
| `npm run preview` | Preview the build |
| `npm run deploy` | Build and `wrangler deploy` the `ux-atlas` worker |

Contracts and tokens: `DESIGN.md`.
