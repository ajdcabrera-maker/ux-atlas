import fs from 'node:fs';
import path from 'node:path';
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const file = path.resolve(process.cwd(), '../optional/brief/SKILL.md');
  const body = fs.readFileSync(file);
  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Disposition': 'attachment; filename="SKILL.md"',
      'Content-Length': String(body.length),
    },
  });
};
