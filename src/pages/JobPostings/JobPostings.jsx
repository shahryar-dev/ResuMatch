/**
 * File: src/pages/JobPostings/JobPostings.jsx
 * Purpose: Filter and list job postings (placeholder data).
 * Author: Alex Kachur
 * Date: 2025-09-29
 */

export default function JobPostings() {
    // Later: fetch from API with useEffect + AbortController
    const postings = [
        { id: 1, title: "Frontend Developer", company: "Company A" },
        { id: 2, title: "Data Analyst", company: "Company B" },
    ];

    /**
     * Handle filter submit.
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    function onFilter(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const filters = Object.fromEntries(form);
        console.log("filters:", filters);
        // TODO: apply filters or refetch with query params
    }

    return (
        <section>
            <h2>Job Postings</h2>

            {/* Simple filter form */}
            <form onSubmit={onFilter}>
                <label>
                    Skill <input name="skill" />
                </label>{" "}
                <label>
                    City <input name="city" />
                </label>{" "}
                <label>
                    Min Salary <input name="minSalary" type="number" />
                </label>{" "}
                <button type="submit">Apply Filters</button>
            </form>

            {/* Placeholder listing */}
            <ul>
                {postings.map((p) => (
                    <li key={p.id}>
                        {p.title} — {p.company}
                    </li>
                ))}
            </ul>
        </section>
    );
}