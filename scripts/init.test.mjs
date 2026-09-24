import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';
import { agentsBlock, applyPointers, claudeBlock } from './init.mjs';

function tempProject() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'ux-atlas-init-'));
}

test('creates both native files', () => {
  const root = tempProject();
  applyPointers(root);
  assert.equal(fs.readFileSync(path.join(root, 'AGENTS.md'), 'utf8'), agentsBlock);
  assert.equal(fs.readFileSync(path.join(root, 'CLAUDE.md'), 'utf8'), claudeBlock);
});

test('keeps existing text and does not duplicate the pointer', () => {
  const root = tempProject();
  fs.writeFileSync(path.join(root, 'AGENTS.md'), '# Project\n\nShip on Friday.\n');
  applyPointers(root);
  applyPointers(root);
  const text = fs.readFileSync(path.join(root, 'AGENTS.md'), 'utf8');
  assert.match(text, /^# Project\n\nShip on Friday\.\n/);
  assert.equal(text.split('<!-- ux-atlas -->').length, 2);
  assert.match(text, /node_modules\/ux-atlas\/skills\/\*\*\/SKILL\.md/);
});

test('leaves a shared AGENTS.md and CLAUDE.md file as one pointer', () => {
  const root = tempProject();
  fs.writeFileSync(path.join(root, 'AGENTS.md'), '# Project\n');
  fs.symlinkSync('AGENTS.md', path.join(root, 'CLAUDE.md'));
  applyPointers(root);
  const text = fs.readFileSync(path.join(root, 'AGENTS.md'), 'utf8');
  assert.match(text, /^# Project\n/);
  assert.equal(text.includes('@node_modules'), false);
  assert.equal(text.split('<!-- ux-atlas -->').length, 2);
});
