import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { delay } from '../delay.js';

describe('delay', () => {
  it('resolves after at least the requested ms', async () => {
    const start = Date.now();
    await delay(20);
    const elapsed = Date.now() - start;
    assert.ok(elapsed >= 15, `expected >=15ms, got ${elapsed}ms`);
  });

  it('resolves to undefined', async () => {
    const result = await delay(1);
    assert.equal(result, undefined);
  });
});