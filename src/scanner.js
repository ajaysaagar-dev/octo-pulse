import fs from 'node:fs';
import path from 'node:path';

export function scanSecurityRisks(targetDir = process.cwd()) {
    const riskFiles = [
        '.env',
        '.env.local',
        '.env.production',
        'id_rsa',
        'id_ed25519',
        'credentials.json',
        'service-account.json'
    ];

    const findings = [];

    for (const fileName of riskFiles) {
        const fullPath = path.join(targetDir, fileName);
        if (fs.existsSync(fullPath)) {
            findings.push({
                type: 'UNTRACKED_SECRET_FILE',
                severity: 'HIGH',
                file: fileName,
                message: `Sensitive environment/credential file found: ${fileName}`
            });
        }
    }

    return {
        clean: findings.length === 0,
        findingsCount: findings.length,
        findings
    };
}
