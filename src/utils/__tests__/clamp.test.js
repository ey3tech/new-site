import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { clamp } from '../clamp.js';

describe('clamp', () => {
  it('clamps below the lower bound', () => {
    assert.equal(clamp(-5, 0, 10), 0);
  });

  it('clamps above the upper bound', () => {
    assert.equal(clamp(20, 0, 10), 10);
  });

  it('returns the value when in range', () => {
    assert.equal(clamp(5, 0, 10), 5);
  });

  it('returns the value when equal to a bound', () => {
    assert.equal(clamp(0, 0, 10), 0);
    assert.equal(clamp(10, 0, 10), 10);
  });

  it('with two arguments caps the value at boundOne', () => {
    // The implementation's two-argument form is asymmetric and behaves as a
    // "max-at-boundOne" cap. Documenting the current behaviour so a future
    // refactor of clamp() has to update these assertions on purpose.
    assert.equal(clamp(5, 0), 0);
    assert.equal(clamp(-1, 0), -1);
  });
});