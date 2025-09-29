/**
 * @file Profile.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Provide a simple profile editor shell for user metadata.
 */
import styles from "./Profile.module.css";

export default function Profile() {
    /**
     * Submit profile form.
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    function onSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const payload = Object.fromEntries(form);
        console.log("profile:", payload);
        // TODO: PUT /me/profile per Profile subsystem once auth context exposes the user token.
    }

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h2 className={styles.title}>Profile</h2>
                <p className={styles.subtitle}>Keep your contact details current for tailored advice.</p>
            </header>

            <form className={styles.form} onSubmit={onSubmit}>
                <label className={styles.field}>
                    <span>Name</span>
                    <input className={styles.input} name="name" autoComplete="name" />
                </label>

                <label className={styles.field}>
                    <span>Location</span>
                    <input className={styles.input} name="location" autoComplete="address-level2" />
                </label>

                <div className={styles.actions}>
                    <button type="submit">Save</button>
                </div>
            </form>
        </section>
    );
}
