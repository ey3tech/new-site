import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const CACHE_DIR = path.join(process.cwd(), '.next/cache/mdx');

function getCacheKey(source, variant = '') {
  return crypto
    .createHash('sha256')
    .update(source + variant)
    .digest('hex');
}

function readCache(key) {
  const file = path.join(CACHE_DIR, `${key}.json`);
  try {
    return JSON.parse(fs.readFileSync(file, 'utf-8'));
  } catch {
    return null;
  }
}

function writeCache(key, data) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(path.join(CACHE_DIR, `${key}.json`), JSON.stringify(data));
}

/**
 * Wraps bundleMDX with a file-system cache keyed by the SHA-256 of the source.
 * Skips recompilation when source hasn't changed between builds.
 *
 * @param {string} source - MDX source string
 * @param {object} bundleOptions - Options forwarded to bundleMDX (mdxOptions, etc.)
 * @param {string} [variant] - Optional extra string to bust the cache (e.g. 'careers')
 */
export async function cachedBundleMDX(source, bundleOptions, variant = '') {
  const key = getCacheKey(source, variant);
  const cached = readCache(key);
  if (cached) return cached;

  const { bundleMDX } = await import('mdx-bundler');
  const result = await bundleMDX({ source, ...bundleOptions });

  // Only cache the serialisable parts (code + frontmatter + matter.content).
  writeCache(key, {
    code: result.code,
    frontmatter: result.frontmatter,
    matter: { content: result.matter.content },
  });

  return result;
}
