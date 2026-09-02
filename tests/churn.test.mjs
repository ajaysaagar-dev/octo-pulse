import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculateCodeChurn } from '../src/metrics/churn.js';

describe('calculateCodeChurn', () => {
    it('calculates total additions, deletions, and net churn', () => {
        const res = calculateCodeChurn([{ additions: 50, deletions: 20 }, { additions: 30, deletions: 10 }]);
        assert.equal(res.additions, 80);
        assert.equal(res.deletions, 30);
        assert.equal(res.net, 50);
    });
});
