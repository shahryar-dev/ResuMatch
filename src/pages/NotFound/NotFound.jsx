/**
 * File: src/pages/NotFound/NotFound.jsx
 * Purpose: Fallback for unknown routes.
 * Author: Alex Kachur
 * Date: 2025-09-29
 */
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section>
            <h2>Page Not Found</h2>
            {/* Provide a quick way back to home */}
            <p>
                <Link to="/">Go Home</Link>
            </p>
        </section>
    );
}