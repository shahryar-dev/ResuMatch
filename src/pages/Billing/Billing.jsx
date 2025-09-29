/**
 * @file Billing.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Placeholder for managing payment methods and subscription billing.
 */
import styles from "./Billing.module.css";

export default function Billing() {
    const paymentMethod = null; // e.g., "Visa **** 4242"

    function onUpdatePayment() {
        console.log("billing: update payment method");
        // TODO: Launch Stripe billing portal and sync status (FR_SUB04/FR_SUB05).
    }

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h2 className={styles.title}>Billing</h2>
                <p className={styles.subtitle}>Manage your payment details and subscription.</p>
            </header>

            {/* TODO: Hydrate payment method details from billing API once backend is available. */}
            <div className={styles.panel}>
                <span className={styles.label}>Payment method</span>
                <p className={styles.value}>{paymentMethod || "No method on file"}</p>
                <button onClick={onUpdatePayment}>Update Payment Method</button>
            </div>
        </section>
    );
}
