import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { formatDiagnosticsSummary } from '../src/diagnostics.js';

describe('formatDiagnosticsSummary', () => {
    it('formats summary accurately', () => {
        const summary = formatDiagnosticsSummary({ grade: 'A', score: 85 }, { findingsCount: 0 }, { velocityTier: 'High' });
        assert.equal(summary.grade, 'A');
        assert.equal(summary.score, 85);
        assert.equal(summary.securityIssues, 0);
        assert.equal(summary.velocityTier, 'High');
    });
});
