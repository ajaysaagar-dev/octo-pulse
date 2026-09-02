import fs from 'node:fs';
import path from 'node:path';

export function analyzeReadme(dir = process.cwd()) {
    const readmePath = path.join(dir, 'README.md');
    if (!fs.existsSync(readmePath)) return { present: false, sectionsFound: [] };
    const content = fs.readFileSync(readmePath, 'utf8');
    const sections = ['Overview', 'Installation', 'Usage', 'License', 'Contributing'];
    const found = sections.filter(s => new RegExp(`#.*${s}`, 'i').test(content));
    return { present: true, wordCount: content.split(/\s+/).length, sectionsFound: found, complete: found.length >= 3 };
}
