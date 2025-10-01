/**
 * @file AnalyzeResult.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Display analysis output placeholders until the API is wired up.
 */
import styles from "./AnalyzeResult.module.css";

export default function AnalyzeResult() {
    const exampleScore = 72; // placeholder

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h2 className={styles.title}>Results</h2>
                <p className={styles.subtitle}>Here’s a snapshot of how well your resume matches the job.</p>
            </header>

            {/* TODO: Replace placeholders with real RA03/RA04 payloads and include SkillGap data per SRS Section 4. */}
            <div className={styles.summary}>
                <div className={styles.scoreCard}>
                    <span className={styles.scoreLabel}>Match Score</span>
                    <span className={styles.scoreValue}>{exampleScore}</span>
                </div>

                <div className={styles.nextStep}>
                    <p>Review the suggestions below to improve your score, then export an optimized copy.</p>
                    <button>Export Optimized Resume</button>
                </div>
            </div>

            <section className={styles.section} aria-labelledby="suggestions-heading">
                <h3 id="suggestions-heading" className={styles.sectionTitle}>
                    Suggestions
                </h3>
                <ul className={styles.suggestionList}>
                    <li className={styles.suggestion}>Missing keyword: “TypeScript”</li>
                    <li className={styles.suggestion}>Rewrite: Add quantifiable metrics to achievements</li>
                    <li className={styles.suggestion}>ATS: Use standard section headings</li>
                </ul>
            </section>
        </section>
    );
}
