import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { formatTimecode, zeroPrefix } from '../timecode.js';

describe('zeroPrefix', () => {
  it('pads single-digit values', () => {
    assert.equal(zeroPrefix(0), '00');
    assert.equal(zeroPrefix(9), '09');
  });

  it('keeps double-digit values as-is', () => {
    assert.equal(zeroPrefix(10), '10');
    assert.equal(zeroPrefix(59), '59');
  });

  it('keeps large values as-is', () => {
    assert.equal(zeroPrefix(100), '100');
  });
});

describe('formatTimecode', () => {
  it('returns 00:00:00:00 for 0 ms', () => {
    assert.equal(formatTimecode(0), '00:00:00:00');
  });

  it('formats a single second', () => {
    assert.equal(formatTimecode(1000), '00:00:01:00');
  });

  it('formats minutes', () => {
    assert.equal(formatTimecode(60 * 1000), '00:01:00:00');
  });

  it('formats hours', () => {
    assert.equal(formatTimecode(60 * 60 * 1000), '01:00:00:00');
  });

  it('formats a combined h/m/s value', () => {
    // 1h 2m 3s
    const ms = (1 * 3600 + 2 * 60 + 3) * 1000;
    assert.equal(formatTimecode(ms), '01:02:03:00');
  });

  it('formats sub-second values into centiseconds', () => {
    // 250 ms should land in the centiseconds slot (1 centisecond = 10ms)
    assert.equal(formatTimecode(250), '00:00:00:25');
  });
});