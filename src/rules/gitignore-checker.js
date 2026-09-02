import fs from 'node:fs';
import path from 'node:path';

export function checkGitignore(dir = process.cwd()) {
    const gitignorePath = path.join(dir, '.gitignore');
    if (!fs.existsSync(gitignorePath)) {
        return { present: false, missingCritical: ['node_modules', '.env'] };
    }
    const content = fs.readFileSync(gitignorePath, 'utf8');
    const criticalPatterns = ['node_modules', '.env'];
    const missing = criticalPatterns.filter(p => !content.includes(p));
    return { present: true, missingCritical: missing, secure: missing.length === 0 };
}
