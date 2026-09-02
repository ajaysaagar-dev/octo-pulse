export function formatCsvMetrics(health) {
    let csv = `Check,Passed,Points\n`;
    for (const c of health.checks) {
        csv += `"${c.name}",${c.passed},${c.points}\n`;
    }
    return csv;
}
