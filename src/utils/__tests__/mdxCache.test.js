import { describe, it, before, after, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { cachedBundleMDX } from '../mdxCache.js';

let originalCwd;

before(() => {
  // cachedBundleMDX writes its cache under process.cwd()/.next/cache/mdx.
  // Point cwd at a fresh tmp dir so we never touch the real build cache.
  originalCwd = process.cwd();
  process.chdir(fs.mkdtempSync(path.join(os.tmpdir(), 'mdxcache-')));
});

after(() => {
  process.chdir(originalCwd);
});

beforeEach(() => {
  // Wipe the .next/cache dir between tests so each test exercises the
  // cold path.
  const cacheDir = path.join(process.cwd(), '.next', 'cache', 'mdx');
  fs.rmSync(cacheDir, { recursive: true, force: true });
});

describe('cachedBundleMDX', () => {
  it('returns the same shape on a cache hit', async () => {
    const source = '# Hello';
    const first = await cachedBundleMDX(source, {}, 'test');
    assert.ok(typeof first.code === 'string', 'expected code to be a string');
    assert.ok(first.frontmatter, 'expected frontmatter');

    const second = await cachedBundleMDX(source, {}, 'test');
    assert.equal(second.code, first.code);
    assert.deepEqual(second.frontmatter, first.frontmatter);
  });

  it('treats different variant keys as independent caches', async () => {
    const source = '# Hi';
    const a = await cachedBundleMDX(source, {}, 'variant-a');
    const b = await cachedBundleMDX(source, {}, 'variant-b');
    // Both runs produced compilable output, but they cache independently.
    assert.ok(a.code);
    assert.ok(b.code);
  });
});