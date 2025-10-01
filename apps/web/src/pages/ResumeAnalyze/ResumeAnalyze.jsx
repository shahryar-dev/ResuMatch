/**
 * @file ResumeAnalyze.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Collect resume and job data prior to triggering an analysis.
 */
import { useNavigate } from "react-router-dom";
import styles from "./ResumeAnalyze.module.css";

export default function ResumeAnalyze() {
    const nav = useNavigate();

    /**
     * Handle analysis submit.
     * For now, echo selected values and navigate to results.
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    function onSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        // Safely read files (may be null if not provided)
        const resumeFile = form.get("resume");
        const jobText = form.get("jobText");
        const jobFile = form.get("jobFile");

        console.log("analyze:", {
            resume: resumeFile && resumeFile.name,
            jobText,
            jobFile: jobFile && jobFile.name,
        });

        // TODO: fetch(`${import.meta.env.VITE_API_URL}/analysis`, { ... }) per FR_RA03/RA04 once backend is ready.
        // TODO: De-duplicate resume uploads via hashing (FR_RA01 acceptance criteria) before enqueueing jobs.
        nav("/analysis/result");
    }

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h2 className={styles.title}>Analyze Resume</h2>
                <p className={styles.subtitle}>
                    Upload your resume and target job so we can generate tailored recommendations.
                </p>
            </header>

            <form className={styles.form} onSubmit={onSubmit}>
                <fieldset className={styles.fieldset}>
                    <legend>Resume</legend>
                    <label className={styles.field}>
                        <span>Upload file</span>
                        <input
                            className={styles.input}
                            type="file"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            required
                        />
                    </label>
                </fieldset>

                <fieldset className={styles.fieldset}>
                    <legend>Job Posting</legend>

                    <label className={styles.field}>
                        <span>Paste job description</span>
                        <textarea
                            className={styles.textarea}
                            name="jobText"
                            rows="6"
                            placeholder="Paste job description here..."
                        ></textarea>
                    </label>

                    <div className={styles.divider}>
                        <span>or</span>
                    </div>

                    <label className={styles.field}>
                        <span>Upload job posting file</span>
                        <input
                            className={styles.input}
                            type="file"
                            name="jobFile"
                            accept=".pdf,.doc,.docx,.txt"
                        />
                    </label>
                </fieldset>

                <div className={styles.actions}>
                    <button type="submit">Run Analysis</button>
                </div>
            </form>
        </section>
    );
}
