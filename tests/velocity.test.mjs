import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculateCommitVelocity } from '../src/velocity.js';

describe('calculateCommitVelocity', () => {
    it('handles empty timestamps', () => {
        const res = calculateCommitVelocity([]);
        assert.equal(res.totalCommits, 0);
        assert.equal(res.velocityTier, 'Dormant');
    });

    it('calculates average commits per week', () => {
        const now = new Date();
        const timestamps = [
            now.toISOString(),
            new Date(now - 86400000).toISOString(),
            new Date(now - 172800000).toISOString(),
            new Date(now - 259200000).toISOString()
        ];
        const res = calculateCommitVelocity(timestamps);
        assert.equal(res.totalCommits, 4);
        assert.ok(res.averagePerWeek >= 1);
    });
});
