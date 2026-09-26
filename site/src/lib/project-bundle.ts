import { deflateRawSync } from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(process.cwd(), '..');

/**
 * Same text in AGENTS.md and CLAUDE.md. Skill selection matches `.cursorrules`,
 * without the Atlas catalog line, which only applies in this repo.
 */
export function projectInstructions(includeDesignSystem: boolean) {
  const design = includeDesignSystem
    ? 'Follow the `DESIGN.md` at this project root. It may set terminology, casing, or a length limit. Follow it for those three.'
    : 'This project already has design-system documentation. Do not add or replace a `DESIGN.md`. If that documentation sets terminology, casing, or a length limit, follow it for those three.';

  return `Skills live in \`skills/**/SKILL.md\`. Each file's \`name\` and \`description\` are the disclosure layer. The body is the rule set.

${design}

## Always on

For any UI, UX, accessibility, or component work, apply this constitution. It supersedes a narrower skill when they conflict. The full text, including edge cases, is \`skills/ux-constitution/SKILL.md\`. Read that body when the task needs a threshold, exception, or example this summary does not settle.

1. **Interaction:** Provide immediate visual feedback (loading, success, error). Prevent errors with constrained inputs. Always provide a non-destructive exit (Cancel or Undo).
2. **Psychology:** Minimize cognitive load. Break complex forms into steps. Primary actions are at least 44×44px and easy to reach.
3. **Perception:** Group related elements with spacing and surfaces. Interactive elements must look distinct from static ones.
4. **Inclusivity:** WCAG 2.1 AA. Semantic HTML. 4.5:1 text contrast. Do not remove \`:focus-visible\` without an equal replacement. Dynamic updates use \`aria-live\`.

If a result breaks one of these, it is broken.

## Task skill

1. Read only the \`name\` and \`description\` frontmatter of the other \`SKILL.md\` files. Do not read every body up front.
2. If one description matches the task, read that body and follow it together with the constitution above.
3. If the request only asks to write, rewrite, or name interface copy, and does not ask to change the flow or the screen, read \`skills/ux-writing/SKILL.md\`. Do not start the design pipeline.
4. If the request only asks where something lives, or what a page, step, or section is called, and does not ask to design the screen, read \`skills/information-architecture/SKILL.md\`. Do not start the design pipeline.
5. If the task is to design, redesign, critique, or add a screen, flow, or feature, read \`skills/design-pipeline/SKILL.md\` and follow its guided or express rule. A narrower skill applies only inside the stage that skill names.
6. If several match and the pipeline does not, read the most specific one.
7. If none match, the constitution is enough. Do not load the rest of the library just in case.
`;
}

export function buildProjectZip(slug: string) {
  const includeDesignSystem = slug !== 'none';
  const instructions = Buffer.from(projectInstructions(includeDesignSystem));
  const files: { name: string; data: Buffer }[] = [
    { name: 'AGENTS.md', data: instructions },
    { name: 'CLAUDE.md', data: instructions },
  ];

  if (includeDesignSystem) {
    const designPath = path.join(repoRoot, 'design-systems', slug, 'DESIGN.md');
    if (!fs.existsSync(designPath)) {
      throw new Error(`No DESIGN.md for ${slug}`);
    }
    files.push({ name: 'DESIGN.md', data: fs.readFileSync(designPath) });
  }

  for (const file of skillFiles()) {
    files.push({ name: file.name, data: fs.readFileSync(file.absolute) });
  }

  return zipStore(files);
}

function skillFiles() {
  const root = path.join(repoRoot, 'skills');
  const files: { name: string; absolute: string }[] = [];

  function walk(directory: string) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        walk(absolute);
        continue;
      }
      if (entry.name !== 'SKILL.md') continue;
      const name = path.posix.join('skills', path.relative(root, absolute).split(path.sep).join('/'));
      files.push({ name, absolute });
    }
  }

  walk(root);
  return files.sort((a, b) => a.name.localeCompare(b.name));
}

function zipStore(files: { name: string; data: Buffer }[]) {
  const locals: Buffer[] = [];
  const centrals: Buffer[] = [];
  let offset = 0;

  for (const file of files) {
    const name = Buffer.from(file.name);
    const compressed = deflateRawSync(file.data);
    const crc = crc32(file.data);
    const local = Buffer.concat([
      header(0x04034b50, [
        u16(20),
        u16(0x0800),
        u16(8),
        u16(0),
        u16(0),
        u32(crc),
        u32(compressed.length),
        u32(file.data.length),
        u16(name.length),
        u16(0),
      ]),
      name,
      compressed,
    ]);
    locals.push(local);

    centrals.push(
      Buffer.concat([
        header(0x02014b50, [
          u16(0x0314),
          u16(20),
          u16(0x0800),
          u16(8),
          u16(0),
          u16(0),
          u32(crc),
          u32(compressed.length),
          u32(file.data.length),
          u16(name.length),
          u16(0),
          u16(0),
          u16(0),
          u16(0),
          u32(0),
          u32(offset),
        ]),
        name,
      ]),
    );
    offset += local.length;
  }

  const central = Buffer.concat(centrals);
  const end = Buffer.concat([
    header(0x06054b50, [
      u16(0),
      u16(0),
      u16(files.length),
      u16(files.length),
      u32(central.length),
      u32(offset),
      u16(0),
    ]),
  ]);

  return Buffer.concat([...locals, central, end]);
}

function header(signature: number, fields: Buffer[]) {
  return Buffer.concat([u32(signature), ...fields]);
}

function u16(value: number) {
  const buffer = Buffer.alloc(2);
  buffer.writeUInt16LE(value);
  return buffer;
}

function u32(value: number) {
  const buffer = Buffer.alloc(4);
  buffer.writeUInt32LE(value >>> 0);
  return buffer;
}

function crc32(data: Buffer) {
  let crc = 0xffffffff;
  for (const byte of data) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      const mask = -(crc & 1);
      crc = (crc >>> 1) ^ (0xedb88320 & mask);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}
