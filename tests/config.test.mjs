import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { loadConfig } from '../src/config.js';

describe('loadConfig', () => {
    it('returns default config when file does not exist', () => {
        const config = loadConfig(process.cwd());
        assert.equal(typeof config.minScore, 'number');
        assert.equal(config.strictSecurity, true);
    });
});
