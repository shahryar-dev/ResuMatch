/**
 * File: src/pages/Login/Login.jsx
 * Purpose: Minimal login form (email & password).
 * Author: Alex Kachur
 * Date: 2025-09-29
 */

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
        <section>
            <h2>Login</h2>
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
                <button type="submit">Login</button>
            </form>
        </section>
    );
}