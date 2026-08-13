import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { srcSetToString } from '../image.js';

describe('srcSetToString', () => {
  it('joins an array of {src, width} entries', () => {
    const result = srcSetToString([
      { src: '/img/a.webp', width: 400 },
      { src: '/img/b.webp', width: 800 },
    ]);
    assert.equal(result, '/img/a.webp 400w, /img/b.webp 800w');
  });

  it('returns a string input unchanged', () => {
    assert.equal(srcSetToString('/img/a.webp 400w'), '/img/a.webp 400w');
  });

  it('returns an empty string for an empty array', () => {
    assert.equal(srcSetToString([]), '');
  });

  it('returns an empty string when called with no argument', () => {
    assert.equal(srcSetToString(), '');
  });
});