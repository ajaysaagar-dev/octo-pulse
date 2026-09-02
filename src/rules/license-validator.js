import fs from 'node:fs';
import path from 'node:path';

export function validateLicense(dir = process.cwd()) {
    const licenseFile = path.join(dir, 'LICENSE');
    if (!fs.existsSync(licenseFile)) {
        return { valid: false, type: 'MISSING', message: 'No LICENSE file found' };
    }
    const content = fs.readFileSync(licenseFile, 'utf8');
    if (content.includes('MIT License')) return { valid: true, type: 'MIT' };
    if (content.includes('Apache License')) return { valid: true, type: 'Apache-2.0' };
    if (content.includes('GNU GENERAL PUBLIC LICENSE')) return { valid: true, type: 'GPL-3.0' };
    return { valid: true, type: 'CUSTOM' };
}
