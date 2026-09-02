import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { generatePreCommitHookScript } from '../src/hooks/pre-commit.js';

describe('generatePreCommitHookScript', () => {
    it('generates valid shell hook script', () => {
        const script = generatePreCommitHookScript();
        assert.ok(script.startsWith('#!/bin/sh'));
        assert.ok(script.includes('octo-pulse.js scan'));
    });
});
