export function renderAsciiTable(headers, rows) {
    const headerLine = `| ${headers.join(' | ')} |`;
    const separator = `| ${headers.map(h => '-'.repeat(h.length)).join(' | ')} |`;
    const rowLines = rows.map(r => `| ${r.join(' | ')} |`).join('\n');
    return `${headerLine}\n${separator}\n${rowLines}`;
}
