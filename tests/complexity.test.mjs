import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { analyzeDirectoryDepth } from '../src/metrics/complexity.js';

describe('analyzeDirectoryDepth', () => {
    it('calculates maximum directory depth accurately', () => {
        const res = analyzeDirectoryDepth(['src/index.js', 'src/rules/sub/deep/file.js']);
        assert.equal(res.maxDepth, 5);
        assert.equal(res.recommended, true);
    });
});
