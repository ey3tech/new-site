import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  pxToNum,
  numToPx,
  pxToRem,
  msToNum,
  numToMs,
  rgbToThreeColor,
  classes,
} from '../style.js';

describe('pxToNum / numToPx', () => {
  it('round-trips pixel strings', () => {
    assert.equal(pxToNum('16px'), 16);
    assert.equal(numToPx(16), '16px');
  });
});

describe('pxToRem', () => {
  it('divides by 16', () => {
    assert.equal(pxToRem(32), '2rem');
  });
});

describe('msToNum / numToMs', () => {
  it('round-trips ms strings', () => {
    assert.equal(msToNum('500ms'), 500);
    assert.equal(numToMs(500), '500ms');
  });
});

describe('rgbToThreeColor', () => {
  it('splits and normalizes rgb strings', () => {
    assert.deepEqual(rgbToThreeColor('255 255 255'), [1, 1, 1]);
    assert.deepEqual(rgbToThreeColor('0 0 0'), [0, 0, 0]);
    assert.deepEqual(rgbToThreeColor('128 64 32'), [128 / 255, 64 / 255, 32 / 255]);
  });

  it('returns an empty array for missing input', () => {
    assert.deepEqual(rgbToThreeColor(undefined), []);
  });
});

describe('classes', () => {
  it('joins truthy class names with spaces', () => {
    assert.equal(classes('a', 'b', 'c'), 'a b c');
  });

  it('drops falsy values', () => {
    assert.equal(classes('a', undefined, false, null, '', 'b'), 'a b');
  });
});