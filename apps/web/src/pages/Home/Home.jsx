/**
 * @file Home.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Render the public landing page with quick access to core flows.
 */
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <section className={styles.page}>
            <div className={styles.intro}>
                <h1 className={styles.title}>ResuMatch</h1>
                <p className={styles.tagline}>AI-powered resume &amp; career coach.</p>
            </div>

            {/* Primary navigation to core flows */}
            <ul className={styles.actions}>
                <li>
                    <Link className={styles.actionLink} to="/analysis">
                        Start Analysis
                    </Link>
                </li>
                <li>
                    <Link className={styles.actionLink} to="/subscriptions">
                        View Plans
                    </Link>
                </li>
                <li>
                    <Link className={styles.actionLink} to="/auth/login">
                        Login
                    </Link>
                </li>
            </ul>
        </section>
    );
}
