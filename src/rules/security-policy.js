import fs from 'node:fs';
import path from 'node:path';

export function checkSecurityPolicy(dir = process.cwd()) {
    const secPath = path.join(dir, 'SECURITY.md');
    if (!fs.existsSync(secPath)) return { exists: false, hasContact: false };
    const content = fs.readFileSync(secPath, 'utf8');
    return { exists: true, hasContact: content.includes('@') || content.includes('http') };
}
