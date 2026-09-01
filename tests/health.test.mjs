import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculateHealthScore } from '../src/health.js';

describe('calculateHealthScore', () => {
    it('returns score object with standard properties', () => {
        const result = calculateHealthScore(process.cwd());
        assert.ok(typeof result.score === 'number');
        assert.ok(typeof result.maxScore === 'number');
        assert.ok(Array.isArray(result.checks));
        assert.ok(['A+', 'A', 'B', 'C', 'D', 'F'].includes(result.grade));
    });

    it('accurately accounts for existing files', () => {
        const result = calculateHealthScore(process.cwd());
        assert.ok(result.checks.length >= 7);
    });
});
