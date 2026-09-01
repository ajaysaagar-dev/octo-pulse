export function formatDiagnosticsSummary(health, security, velocity) {
    return {
        timestamp: new Date().toISOString(),
        grade: health.grade,
        score: health.score,
        securityIssues: security.findingsCount,
        velocityTier: velocity?.velocityTier || 'N/A'
    };
}
