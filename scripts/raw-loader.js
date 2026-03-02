/**
 * Minimal Turbopack-compatible raw loader.
 * Returns file contents as an ES module default export string.
 * Used for importing .glsl shader files as raw strings.
 */
module.exports = function rawLoader(source) {
  return `export default ${JSON.stringify(source)};`;
};
