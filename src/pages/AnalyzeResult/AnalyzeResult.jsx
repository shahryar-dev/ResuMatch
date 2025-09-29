/**
 * File: src/pages/AnalyzeResult/AnalyzeResult.jsx
 * Purpose: Placeholder results screen after analysis.
 * Author: Alex Kachur
 * Date: 2025-09-29
 */

export default function AnalyzeResult() {
    const exampleScore = 72; // placeholder

    return (
        <section>
            <h2>Results</h2>
            <p>Score: {exampleScore}</p>
            <h3>Suggestions</h3>
            <ul>
                <li>Missing keyword: "TypeScript"</li>
                <li>Rewrite: Add quantifiable metrics to achievements</li>
                <li>ATS: Use standard section headings</li>
            </ul>
            <button>Export Optimized Resume</button>
        </section>
    );
}