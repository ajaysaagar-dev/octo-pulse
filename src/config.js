import fs from 'node:fs';
import path from 'node:path';

export function loadConfig(dir = process.cwd()) {
    const configPath = path.join(dir, '.octopulserc.json');
    if (fs.existsSync(configPath)) {
        try {
            const raw = fs.readFileSync(configPath, 'utf8');
            return JSON.parse(raw);
        } catch {
            return { error: 'INVALID_CONFIG' };
        }
    }
    return { minScore: 80, strictSecurity: true, defaultFormat: 'terminal' };
}
