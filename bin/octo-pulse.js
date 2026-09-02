#!/usr/bin/env node

import { calculateHealthScore } from '../src/health.js';
import { scanSecurityRisks } from '../src/scanner.js';
import { formatMarkdownReport } from '../src/formatters/markdown.js';
import { formatHtmlReport } from '../src/formatters/html.js';
import { formatCsvMetrics } from '../src/formatters/csv.js';

const args = process.argv.slice(2);
const command = args[0] || 'analyze';

function printBanner() {
    console.log('\x1b[36m' + `
   ____       __          ____        __          
  / __ \\_____/ /_____    / __ \\__  __/ /_______  
 / / / / ___/ __/ __ \\  / /_/ / / / / / ___/ _ \\ 
/ /_/ / /__/ /_/ /_/ / / ____/ /_/ / (__  )  __/ 
\\____/\\___/\\__/\\____/ /_/    \\__,_/_/____/\\___/  
       >> Git Repository Telemetry & Health Analyzer <<
` + '\x1b[0m');
}

if (args.includes('--help') || command === 'help') {
    printBanner();
    console.log(`
Usage:
  octo-pulse <command> [options]

Commands:
  analyze [dir]    Run comprehensive repository health check (default)
  scan [dir]       Audit security hygiene and check for exposed secrets
  export [dir]     Export health report (--format=json|md|html|csv)
  version          Display version information

Options:
  --json           Output results in JSON format
  --format=<type>  Output format (json, md, html, csv)
  --help           Show this help manual
`);
    process.exit(0);
}

if (args.includes('--version') || command === 'version') {
    console.log('octo-pulse v1.1.0');
    process.exit(0);
}

const targetDir = args[1] && !args[1].startsWith('--') ? args[1] : process.cwd();
const formatArg = args.find(a => a.startsWith('--format='));
const format = formatArg ? formatArg.split('=')[1] : (args.includes('--json') ? 'json' : 'terminal');

const health = calculateHealthScore(targetDir);
const security = scanSecurityRisks(targetDir);

if (command === 'export' || format !== 'terminal') {
    if (format === 'json') console.log(JSON.stringify({ health, security }, null, 2));
    else if (format === 'md') console.log(formatMarkdownReport(health, security));
    else if (format === 'html') console.log(formatHtmlReport(health, security));
    else if (format === 'csv') console.log(formatCsvMetrics(health));
} else {
    printBanner();
    console.log(`\x1b[1mTarget Directory:\x1b[0m ${targetDir}\n`);
    console.log(`\x1b[1mHealth Score:\x1b[0m \x1b[32m${health.score}/100\x1b[0m (Grade: \x1b[33m${health.grade}\x1b[0m)\n`);
    for (const check of health.checks) {
        const icon = check.passed ? '\x1b[32mâœ”\x1b[0m' : '\x1b[31mâœ–\x1b[0m';
        console.log(`  ${icon} ${check.name.padEnd(20)} [${check.points} pts] - ${check.description}`);
    }
    console.log('\n=== Security Scan ===');
    if (security.clean) {
        console.log('  \x1b[32mâœ” No high-risk credential files detected.\x1b[0m');
    } else {
        for (const f of security.findings) {
            console.log(`  \x1b[31mâœ– [${f.severity}] ${f.message}\x1b[0m`);
        }
    }
}
