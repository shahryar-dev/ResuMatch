/**
 * @file Login.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Present the login form shell for credential collection.
 */
import styles from "./Login.module.css";

export default function Login() {
    /**
     * Handle login form submit.
     * Collects form values and (later) will send to API.
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    function onSubmit(e) {
        e.preventDefault(); // avoid full reload
        const form = new FormData(e.currentTarget);
        const payload = Object.fromEntries(form); // { email, password }
        console.log("login:", payload);
        // Later: fetch(`${import.meta.env.VITE_API_URL}/auth/login`, { ... })
    }

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h2 className={styles.title}>Login</h2>
                <p className={styles.subtitle}>Access your dashboard and ongoing analyses.</p>
            </header>

            <form className={styles.form} onSubmit={onSubmit}>
                <label className={styles.field}>
                    <span>Email</span>
                    <input className={styles.input} name="email" type="email" required />
                </label>

                <label className={styles.field}>
                    <span>Password</span>
                    <input
                        className={styles.input}
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                    />
                </label>

                <div className={styles.actions}>
                    <button type="submit">Login</button>
                </div>
            </form>
        </section>
    );
}
