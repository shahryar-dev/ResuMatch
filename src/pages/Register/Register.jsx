/**
 * File: src/pages/Register/Register.jsx
 * Purpose: Simple registration form (shell).
 * Author: Alex Kachur
 * Date: 2025-09-29
 */

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
        <section>
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Email
                    <input name="email" type="email" required />
                </label>
                <br />
                <label>
                    Password
                    <input name="password" type="password" required />
                </label>
                <br />
                <button type="submit">Create Account</button>
            </form>
        </section>
    );
}