export function renderAsciiVelocityBar(commitsPerWeek = 0) {
    const clamped = Math.min(20, Math.max(0, Math.round(commitsPerWeek)));
    const filled = '█'.repeat(clamped);
    const empty = '░'.repeat(20 - clamped);
    return `[${filled}${empty}] (${commitsPerWeek} commits/week)`;
}
