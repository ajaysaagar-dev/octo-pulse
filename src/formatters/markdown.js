export function formatMarkdownReport(health, security) {
    let md = `# Repository Health Report\n\n`;
    md += `**Score:** ${health.score}/${health.maxScore} (Grade: ${health.grade})\n\n`;
    md += `## Checklist\n\n`;
    for (const c of health.checks) {
        md += `- [${c.passed ? 'x' : ' '}] **${c.name}** (${c.points} pts) - ${c.description}\n`;
    }
    md += `\n## Security Hygiene\n\n`;
    if (security.clean) {
        md += `âœ… No sensitive environment credentials detected.\n`;
    } else {
        for (const f of security.findings) {
            md += `- âš ï¸ **[${f.severity}]** ${f.message}\n`;
        }
    }
    return md;
}
