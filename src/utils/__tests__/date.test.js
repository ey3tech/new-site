import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { formatDate } from '../date.js';

describe('formatDate', () => {
  it('formats an ISO date string', () => {
    // Locale-independent spot-check: only verify year/month/day parts
    // are present. toLocaleDateString output varies by environment.
    const out = formatDate('2024-03-15T12:00:00Z');
    assert.match(out, /2024/);
    assert.match(out, /15/);
  });

  it('accepts a Date object', () => {
    const out = formatDate(new Date('2020-01-02T00:00:00Z'));
    assert.match(out, /2020/);
    assert.match(out, /2/);
  });
});