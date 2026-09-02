import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { checkGitignore } from '../src/rules/gitignore-checker.js';

describe('checkGitignore', () => {
    it('checks gitignore for critical exclusions', () => {
        const res = checkGitignore(process.cwd());
        assert.equal(typeof res.present, 'boolean');
        assert.equal(typeof res.secure, 'boolean');
    });
});
