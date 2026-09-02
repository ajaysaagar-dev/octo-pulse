import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { checkCiWorkflow } from '../src/rules/ci-checker.js';

describe('checkCiWorkflow', () => {
    it('detects workflow yml files in .github/workflows', () => {
        const res = checkCiWorkflow(process.cwd());
        assert.equal(res.hasCi, true);
        assert.ok(res.workflows.length > 0);
    });
});
