/**
 * @file Notifications.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Render placeholder notification items for user updates.
 */
import styles from "./Notifications.module.css";

export default function Notifications() {
    const items = [
        "Analysis ready for Resume v3",
        "Payment succeeded",
        "Usage at 80% of monthly quota",
    ];

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h2 className={styles.title}>Notifications</h2>
                <p className={styles.subtitle}>Recent alerts about analyses, billing, and usage.</p>
            </header>

            {/* TODO: Fetch notifications feed per FR_NTF01-NTF04 and surface channel/status metadata. */}
            <ul className={styles.list}>
                {items.map((msg, idx) => (
                    <li key={idx} className={styles.item}>
                        {msg}
                    </li>
                ))}
            </ul>
        </section>
    );
}
