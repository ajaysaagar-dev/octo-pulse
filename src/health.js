import fs from 'node:fs';
import path from 'node:path';

export function calculateHealthScore(repoPath = process.cwd()) {
    const checks = [
        { name: 'README.md', file: 'README.md', points: 20, description: 'Project overview and documentation' },
        { name: 'LICENSE', file: 'LICENSE', points: 15, description: 'Open-source licensing terms' },
        { name: 'CONTRIBUTING.md', file: 'CONTRIBUTING.md', points: 10, description: 'Contributor onboarding guidelines' },
        { name: 'SECURITY.md', file: 'SECURITY.md', points: 10, description: 'Vulnerability disclosure policy' },
        { name: '.gitignore', file: '.gitignore', points: 10, description: 'Git ignore exclusions' },
        { name: 'CI/CD Workflows', dir: '.github/workflows', points: 20, description: 'Automated test/build workflows' },
        { name: 'Test Suite', dir: 'tests', points: 15, description: 'Automated unit/integration tests' }
    ];

    let totalScore = 0;
    const results = [];

    for (const check of checks) {
        let passed = false;
        if (check.file) {
            passed = fs.existsSync(path.join(repoPath, check.file));
        } else if (check.dir) {
            const targetDir = path.join(repoPath, check.dir);
            passed = fs.existsSync(targetDir) && fs.readdirSync(targetDir).length > 0;
        }

        if (passed) {
            totalScore += check.points;
        }

        results.push({
            name: check.name,
            passed,
            points: check.points,
            description: check.description
        });
    }

    let grade = 'F';
    if (totalScore >= 90) grade = 'A+';
    else if (totalScore >= 80) grade = 'A';
    else if (totalScore >= 70) grade = 'B';
    else if (totalScore >= 50) grade = 'C';
    else if (totalScore >= 30) grade = 'D';

    return {
        score: totalScore,
        maxScore: 100,
        grade,
        checks: results
    };
}
