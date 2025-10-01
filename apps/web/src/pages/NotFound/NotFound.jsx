/**
 * @file NotFound.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Present a friendly fallback for unmapped routes.
 */
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <section className={styles.page}>
            <h2 className={styles.title}>Page Not Found</h2>
            <p className={styles.message}>
                The page you were looking for could not be located. Head back to the dashboard to
                continue.
            </p>
            <Link className={styles.link} to="/">
                Return Home
            </Link>
        </section>
    );
}
