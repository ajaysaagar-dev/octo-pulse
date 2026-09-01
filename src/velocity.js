export function calculateCommitVelocity(commitTimestamps = []) {
    if (!Array.isArray(commitTimestamps) || commitTimestamps.length === 0) {
        return { totalCommits: 0, averagePerWeek: 0, velocityTier: 'Dormant' };
    }

    const totalCommits = commitTimestamps.length;
    const now = Date.now();
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
    
    // Sort descending
    const sorted = [...commitTimestamps].map(t => new Date(t).getTime()).sort((a, b) => b - a);
    const newest = sorted[0];
    const oldest = sorted[sorted.length - 1];

    const spanWeeks = Math.max(1, Math.ceil((newest - oldest) / oneWeekMs));
    const averagePerWeek = +(totalCommits / spanWeeks).toFixed(2);

    let velocityTier = 'Low';
    if (averagePerWeek >= 10) velocityTier = 'High';
    else if (averagePerWeek >= 3) velocityTier = 'Moderate';

    return {
        totalCommits,
        spanWeeks,
        averagePerWeek,
        velocityTier
    };
}
