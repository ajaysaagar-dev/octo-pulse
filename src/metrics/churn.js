export function calculateCodeChurn(changes = []) {
    let additions = 0, deletions = 0;
    for (const c of changes) {
        additions += c.additions || 0;
        deletions += c.deletions || 0;
    }
    return { totalChanges: additions + deletions, additions, deletions, net: additions - deletions };
}
