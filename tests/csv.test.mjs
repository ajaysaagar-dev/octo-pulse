import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { formatCsvMetrics } from '../src/formatters/csv.js';

describe('formatCsvMetrics', () => {
    it('formats checks into csv headers and rows', () => {
        const csv = formatCsvMetrics({ checks: [{ name: 'LICENSE', passed: true, points: 15 }] });
        assert.ok(csv.startsWith('Check,Passed,Points'));
        assert.ok(csv.includes('"LICENSE",true,15'));
    });
});
