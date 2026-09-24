## Development

When starting the dev server, use background mode:

```
npm --prefix site run dev -- --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Deploy

Deploy only after the change is on GitHub `main`. The site renders this repo, and the project-folder download is built from it. A visitor has to get the same files from GitHub that the live site describes.

1. Commit the change.
2. Push `main` to GitHub (`origin`, https://github.com/ajdcabrera-maker/ux-atlas.git).
3. From a clean `main` that matches `origin/main`, run `npm run deploy`.

Do not deploy uncommitted work, or a commit that exists only on this machine.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
