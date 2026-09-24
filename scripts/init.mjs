#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const START = '<!-- ux-atlas -->';
const END = '<!-- /ux-atlas -->';
const instructions = 'node_modules/ux-atlas/instructions/AGENTS.md';
const skills = 'node_modules/ux-atlas/skills/**/SKILL.md';

export const agentsBlock = `${START}
Follow ${instructions}. Skills are in ${skills}.
${END}
`;

export const claudeBlock = `${START}
@${instructions}
${END}
`;

function packageRoot() {
  return path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
}

export function shouldSkip() {
  if (process.env.npm_config_global === 'true') return true;
  return !packageRoot().split(path.sep).includes('node_modules');
}

export function resolveProjectRoot() {
  return process.env.INIT_CWD || process.cwd();
}

function upsert(filePath, block) {
  const existing = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
  const pattern = new RegExp(`${START}[\\s\\S]*?${END}\\n?`);
  const marked = block.endsWith('\n') ? block : `${block}\n`;
  let next = pattern.test(existing)
    ? existing.replace(pattern, marked)
    : `${existing}${existing.length === 0 ? '' : existing.endsWith('\n') ? '\n' : '\n\n'}${marked}`;
  if (!next.endsWith('\n')) next += '\n';
  fs.writeFileSync(filePath, next);
}

function sameFile(left, right) {
  if (!fs.existsSync(left) || !fs.existsSync(right)) return false;
  const a = fs.statSync(left);
  const b = fs.statSync(right);
  return a.dev === b.dev && a.ino === b.ino;
}

export function applyPointers(projectRoot) {
  const agents = path.join(projectRoot, 'AGENTS.md');
  const claude = path.join(projectRoot, 'CLAUDE.md');
  upsert(agents, agentsBlock);
  if (sameFile(agents, claude)) return;
  upsert(claude, claudeBlock);
}

const invokedDirectly =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly && !shouldSkip()) {
  try {
    applyPointers(resolveProjectRoot());
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`ux-atlas: could not write the project pointer. ${message}`);
  }
}
