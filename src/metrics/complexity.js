export function analyzeDirectoryDepth(filePaths = []) {
    let maxDepth = 0;
    for (const p of filePaths) {
        const depth = p.split(/[\\/]/).length;
        if (depth > maxDepth) maxDepth = depth;
    }
    return { maxDepth, recommended: maxDepth <= 5 };
}
