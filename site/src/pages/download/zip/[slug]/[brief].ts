import fs from 'node:fs';
import path from 'node:path';
import type { APIRoute } from 'astro';
import { buildProjectZip } from '../../../../lib/project-bundle';

export function getStaticPaths() {
  const root = path.resolve(process.cwd(), '../design-systems');
  const slugs = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(root, entry.name, 'DESIGN.md')))
    .map((entry) => entry.name);

  return [...slugs, 'none'].flatMap((slug) =>
    ['brief', 'none'].map((brief) => ({ params: { slug, brief } })),
  );
}

export const GET: APIRoute = ({ params }) => {
  const body = buildProjectZip(params.slug ?? '', params.brief === 'brief');
  return new Response(body, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename="ux-atlas.zip"',
      'Content-Length': String(body.length),
    },
  });
};
