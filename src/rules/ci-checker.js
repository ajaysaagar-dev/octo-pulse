import fs from 'node:fs';
import path from 'node:path';

export function checkCiWorkflow(dir = process.cwd()) {
    const wfDir = path.join(dir, '.github', 'workflows');
    if (!fs.existsSync(wfDir)) return { hasCi: false, workflows: [] };
    const files = fs.readdirSync(wfDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
    return { hasCi: files.length > 0, workflows: files };
}
