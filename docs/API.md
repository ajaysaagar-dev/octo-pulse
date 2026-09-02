# OctoPulse API Reference

## Modules
- `calculateHealthScore(dir)`: Evaluates repository against 7 health criteria.
- `scanSecurityRisks(dir)`: Scans for untracked environment credentials.
- `loadConfig(dir)`: Parses `.octopulserc.json`.
- `formatMarkdownReport(health, security)`: Generates Markdown reports.
- `formatHtmlReport(health, security)`: Generates standalone HTML dashboards.
- `formatCsvMetrics(health)`: Exports CSV metrics.
