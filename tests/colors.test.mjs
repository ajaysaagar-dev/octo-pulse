import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { colors } from '../src/ui/colors.js';

describe('colors', () => {
    it('applies ansi color escape sequences', () => {
        const green = colors.green('OK');
        assert.ok(green.includes('\x1b[32mOK\x1b[0m'));
    });
});
