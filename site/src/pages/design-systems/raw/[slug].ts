import fs from 'node:fs';
import path from 'node:path';
import type { APIRoute } from 'astro';

export function getStaticPaths() {
  const root = path.resolve(process.cwd(), '../design-systems');
  const slugs = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(root, entry.name, 'DESIGN.md')))
    .map((entry) => entry.name);

  return slugs.map((slug) => ({
    params: { slug },
    props: { body: fs.readFileSync(path.join(root, slug, 'DESIGN.md'), 'utf8') },
  }));
}

export const GET: APIRoute = ({ props }) => {
  return new Response(props.body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Disposition': 'attachment; filename="DESIGN.md"',
    },
  });
};
