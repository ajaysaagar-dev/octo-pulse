import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { formatMarkdownReport } from '../src/formatters/markdown.js';

describe('formatMarkdownReport', () => {
    it('generates formatted markdown report string', () => {
        const health = { score: 100, maxScore: 100, grade: 'A+', checks: [{ name: 'README.md', passed: true, points: 20, description: 'Docs' }] };
        const security = { clean: true, findings: [] };
        const md = formatMarkdownReport(health, security);
        assert.ok(md.includes('# Repository Health Report'));
        assert.ok(md.includes('README.md'));
    });
});
