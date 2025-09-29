/**
 * File: src/pages/ResumeAnalyze/ResumeAnalyze.jsx
 * Purpose: Upload a resume and supply a job posting; start analysis.
 * Author: Alex Kachur
 * Date: 2025-09-29
 */
import { useNavigate } from "react-router-dom";

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

        // TODO: fetch(`${import.meta.env.VITE_API_URL}/analysis`, { ... })
        nav("/analysis/result");
    }

    return (
        <section>
            <h2>Analyze Resume</h2>

            {/* One form to submit both resume and job data */}
            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend>Resume</legend>
                    <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
                </fieldset>

                <fieldset>
                    <legend>Job Posting</legend>

                    {/* Option 1: Paste JD */}
                    <label>
                        Paste JD
                        <br />
                        <textarea
                            name="jobText"
                            rows="6"
                            placeholder="Paste job description here..."
                        ></textarea>
                    </label>
                    <br />

                    {/* Option 2: Upload posting file */}
                    <span>or</span>
                    <br />
                    <input type="file" name="jobFile" accept=".pdf,.doc,.docx,.txt" />
                </fieldset>

                <button type="submit">Run Analysis</button>
            </form>
        </section>
    );
}