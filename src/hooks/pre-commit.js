export function generatePreCommitHookScript() {
    return `#!/bin/sh\n# OctoPulse Pre-commit Security Hook\nnode bin/octo-pulse.js scan\nif [ $? -ne 0 ]; then\n  echo "Commit blocked by OctoPulse security scan."\n  exit 1\nfi\n`;
}
