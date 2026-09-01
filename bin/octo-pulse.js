#!/usr/bin/env node

import { calculateHealthScore } from '../src/health.js';
import { scanSecurityRisks } from '../src/scanner.js';
import { calculateCommitVelocity } from '../src/velocity.js';

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
  version          Display version information

Options:
  --json           Output results in JSON format
  --help           Show this help manual
`);
    process.exit(0);
}

if (args.includes('--version') || command === 'version') {
    console.log('octo-pulse v1.0.0');
    process.exit(0);
}

const targetDir = args[1] && !args[1].startsWith('--') ? args[1] : process.cwd();
const isJson = args.includes('--json');

if (command === 'analyze') {
    const health = calculateHealthScore(targetDir);
    const security = scanSecurityRisks(targetDir);

    if (isJson) {
        console.log(JSON.stringify({ health, security }, null, 2));
    } else {
        printBanner();
        console.log(`\x1b[1mTarget Directory:\x1b[0m ${targetDir}\n`);
        console.log(`\x1b[1mHealth Score:\x1b[0m \x1b[32m${health.score}/100\x1b[0m (Grade: \x1b[33m${health.grade}\x1b[0m)\n`);
        console.log('=== Checklist ===');
        for (const check of health.checks) {
            const icon = check.passed ? '\x1b[32m✔\x1b[0m' : '\x1b[31m✖\x1b[0m';
            console.log(`  ${icon} ${check.name.padEnd(20)} [${check.points} pts] - ${check.description}`);
        }
        console.log('\n=== Security Scan ===');
        if (security.clean) {
            console.log('  \x1b[32m✔ No high-risk credential files detected.\x1b[0m');
        } else {
            for (const f of security.findings) {
                console.log(`  \x1b[31m✖ [${f.severity}] ${f.message}\x1b[0m`);
            }
        }
        console.log('\n\x1b[36mDone! Run with --json for automated CI ingestion.\x1b[0m\n');
    }
} else if (command === 'scan') {
    const security = scanSecurityRisks(targetDir);
    if (isJson) {
        console.log(JSON.stringify(security, null, 2));
    } else {
        printBanner();
        console.log(`Security Scan for: ${targetDir}`);
        console.log(`Clean: ${security.clean ? 'YES' : 'NO'}`);
        console.log(`Issues found: ${security.findingsCount}`);
    }
}
