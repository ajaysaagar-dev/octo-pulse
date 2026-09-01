import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { renderAsciiVelocityBar } from '../src/visualizer.js';

describe('renderAsciiVelocityBar', () => {
    it('renders velocity bar string with correct length and label', () => {
        const bar = renderAsciiVelocityBar(5);
        assert.ok(bar.includes('█████'));
        assert.ok(bar.includes('(5 commits/week)'));
    });

    it('clamps high values correctly', () => {
        const bar = renderAsciiVelocityBar(50);
        assert.ok(bar.includes('████████████████████'));
    });
});
