export function formatHtmlReport(health, security) {
    return `<!DOCTYPE html>
<html>
<head><title>OctoPulse Health Report</title><style>body{font-family:sans-serif;padding:2rem;background:#1e1e2e;color:#fff;}</style></head>
<body>
  <h1>Repository Health: ${health.score}/100 (${health.grade})</h1>
  <ul>
    ${health.checks.map(c => `<li>${c.passed ? 'âœ…' : 'âŒ'} ${c.name} (${c.points} pts)</li>`).join('')}
  </ul>
</body>
</html>`;
}
