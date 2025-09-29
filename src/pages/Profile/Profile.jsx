/**
 * File: src/pages/Profile/Profile.jsx
 * Purpose: Update basic user details (shell).
 * Author: Alex Kachur
 * Date: 2025-09-29
 */

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
        // TODO: PUT /me/profile
    }

    return (
        <section>
            <h2>Profile</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Name <input name="name" />
                </label>
                <br />
                <label>
                    Location <input name="location" />
                </label>
                <br />
                <button type="submit">Save</button>
            </form>
        </section>
    );
}