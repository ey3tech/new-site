/**
 * Turbopack-compatible static asset loader.
 * Copies binary assets (e.g. .glb, .mp4) to public/static/ and returns
 * an ES module that exports the public URL string.
 *
 * Equivalent to webpack's `file-loader` / `asset/resource` behavior.
 */

const path = require('path');
const fs = require('fs-extra');
const crypto = require('crypto');

module.exports = function staticUrlLoader(source) {
  const resourcePath = this.resourcePath;
  const ext = path.extname(resourcePath);
  const basename = path.basename(resourcePath, ext);

  // Generate a short hash from the file content for cache-busting
  const hash = crypto.createHash('sha1').update(source).digest('hex').slice(0, 8);
  const filename = `${basename}.${hash}${ext}`;

  const destDir = path.join(process.cwd(), 'public', 'static');
  const destPath = path.join(destDir, filename);

  fs.ensureDirSync(destDir);

  // Only write if the file doesn't already exist (idempotent)
  if (!fs.existsSync(destPath)) {
    fs.writeFileSync(destPath, source);
  }

  return `export default "/static/${filename}";`;
};

// Must be set to true so Webpack/Turbopack passes a raw Buffer instead of a string
module.exports.raw = true;
