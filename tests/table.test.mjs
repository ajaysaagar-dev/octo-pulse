import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { renderAsciiTable } from '../src/ui/table.js';

describe('renderAsciiTable', () => {
    it('renders formatted ascii markdown table', () => {
        const table = renderAsciiTable(['ColA', 'ColB'], [['val1', 'val2']]);
        assert.ok(table.includes('| ColA | ColB |'));
        assert.ok(table.includes('| val1 | val2 |'));
    });
});
