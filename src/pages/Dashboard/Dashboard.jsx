/**
 * @file Dashboard.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Provide a post-login hub with links into primary workflows.
 */
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h2 className={styles.title}>Dashboard</h2>
                <p className={styles.subtitle}>Quick links to keep your resume and job hunt on track.</p>
            </header>

            {/* TODO: Surface career dashboard KPIs (SRS Capabilities #8) once analytics endpoints exist. */}
            <ul className={styles.linkGrid}>
                <li>
                    <Link className={styles.navCard} to="/analysis">
                        Analyze Resume
                    </Link>
                </li>
                <li>
                    <Link className={styles.navCard} to="/subscriptions">
                        Plans
                    </Link>
                </li>
                <li>
                    <Link className={styles.navCard} to="/jobs">
                        Job Postings
                    </Link>
                </li>
                <li>
                    <Link className={styles.navCard} to="/notifications">
                        Notifications
                    </Link>
                </li>
                <li>
                    <Link className={styles.navCard} to="/profile">
                        Profile
                    </Link>
                </li>
            </ul>
        </section>
    );
}
