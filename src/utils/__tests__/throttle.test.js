import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { throttle } from '../throttle.js';

describe('throttle', () => {
  it('calls the function immediately on first invocation', () => {
    let calls = 0;
    const fn = throttle(() => calls++, 100);
    fn();
    assert.equal(calls, 1);
  });

  it('suppresses calls within the time frame', () => {
    let calls = 0;
    const fn = throttle(() => calls++, 100);
    fn();
    fn();
    fn();
    assert.equal(calls, 1);
  });

  it('calls again after the time frame has elapsed', async () => {
    let calls = 0;
    const fn = throttle(() => calls++, 30);
    fn();
    await delay(50);
    fn();
    assert.equal(calls, 2);
  });
});

// Local helper to avoid cross-file imports for a small util.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}