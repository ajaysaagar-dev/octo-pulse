import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { formatHtmlReport } from '../src/formatters/html.js';

describe('formatHtmlReport', () => {
    it('renders valid html structure', () => {
        const html = formatHtmlReport({ score: 90, grade: 'A', checks: [] }, { clean: true, findings: [] });
        assert.ok(html.includes('<!DOCTYPE html>'));
        assert.ok(html.includes('OctoPulse Health Report'));
    });
});
