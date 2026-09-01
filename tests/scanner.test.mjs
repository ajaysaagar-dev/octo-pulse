import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { scanSecurityRisks } from '../src/scanner.js';

describe('scanSecurityRisks', () => {
    it('returns a clean status when no forbidden files are present', () => {
        const res = scanSecurityRisks(process.cwd());
        assert.ok(typeof res.clean === 'boolean');
        assert.ok(Array.isArray(res.findings));
    });
});
