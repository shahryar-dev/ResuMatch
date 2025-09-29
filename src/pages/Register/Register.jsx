/**
 * @file Register.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Render the account registration shell for basic credentials.
 */
import styles from "./Register.module.css";

export default function Register() {
    /**
     * Handle registration submit.
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    function onSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const payload = Object.fromEntries(form);
        console.log("register:", payload);
        // Later: POST /auth/register
    }

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h2 className={styles.title}>Create an account</h2>
                <p className={styles.subtitle}>Start optimizing resumes tailored to each role.</p>
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
                        autoComplete="new-password"
                    />
                </label>

                <div className={styles.actions}>
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </section>
    );
}
