import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { checkSecurityPolicy } from '../src/rules/security-policy.js';

describe('checkSecurityPolicy', () => {
    it('checks SECURITY.md validity and contact info', () => {
        const res = checkSecurityPolicy(process.cwd());
        assert.equal(res.exists, true);
        assert.equal(res.hasContact, true);
    });
});
