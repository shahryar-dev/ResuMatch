/**
 * @file Subscriptions.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Present placeholder subscription tiers and trigger selection handlers.
 */
import styles from "./Subscriptions.module.css";

export default function Subscriptions() {
    // Later: plans from API
    const plans = [
        { id: "free", name: "Free", detail: "Basic usage" },
        { id: "basic", name: "Basic", detail: "More analysis runs" },
        { id: "pro", name: "Premium", detail: "All features unlocked" },
    ];

    function onSubscribeClick(planId) {
        console.log("subscribe:", planId);
        // TODO: Invoke Stripe checkout (FR_SUB02) and persist plan selection.
    }

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h2 className={styles.title}>Plans</h2>
                <p className={styles.subtitle}>Pick the level that fits your job search intensity.</p>
            </header>

            {/* TODO: Load plan metadata from catalog service (FR_SUB06) instead of hardcoding. */}
            <ul className={styles.planGrid}>
                {plans.map((plan) => (
                    <li key={plan.id} className={styles.planCard}>
                        <h3 className={styles.planName}>{plan.name}</h3>
                        <p className={styles.planDetail}>{plan.detail}</p>
                        <button onClick={() => onSubscribeClick(plan.id)}>Choose</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
