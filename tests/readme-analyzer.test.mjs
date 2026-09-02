import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { analyzeReadme } from '../src/rules/readme-analyzer.js';

describe('analyzeReadme', () => {
    it('analyzes sections in README.md', () => {
        const res = analyzeReadme(process.cwd());
        assert.equal(res.present, true);
        assert.ok(res.wordCount > 10);
    });
});
