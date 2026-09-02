import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { validateLicense } from '../src/rules/license-validator.js';

describe('validateLicense', () => {
    it('validates current repository license', () => {
        const res = validateLicense(process.cwd());
        assert.equal(typeof res.valid, 'boolean');
        assert.ok(typeof res.type === 'string');
    });
});
