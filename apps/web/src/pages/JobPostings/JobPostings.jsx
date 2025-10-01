/**
 * @file JobPostings.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Shell for job filter inputs and placeholder listings.
 */
import styles from "./JobPostings.module.css";

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
        // TODO: Call jobs service with filters (FR_JP04) and hydrate list.
    }

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h2 className={styles.title}>Job Postings</h2>
                <p className={styles.subtitle}>
                    Filter roles and explore AI curated matches.
                </p>
            </header>

            <form className={styles.filterForm} onSubmit={onFilter}>
                <label className={styles.field}>
                    <span>Skill</span>
                    <input className={styles.input} name="skill" placeholder="e.g. React" />
                </label>

                <label className={styles.field}>
                    <span>City</span>
                    <input className={styles.input} name="city" placeholder="e.g. Toronto" />
                </label>

                <label className={styles.field}>
                    <span>Min salary</span>
                    <input className={styles.input} name="minSalary" type="number" min="0" />
                </label>

                <div className={styles.actions}>
                    <button type="submit">Apply Filters</button>
                </div>
            </form>

            {/* TODO: Add recruiter upload workflow (FR_JP01/JP02/JP03) when recruiter UI is introduced. */}
            <ul className={styles.list}>
                {postings.map((p) => (
                    <li key={p.id} className={styles.card}>
                        <h3 className={styles.cardTitle}>{p.title}</h3>
                        <p className={styles.cardMeta}>{p.company}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
