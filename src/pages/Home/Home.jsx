/**
 * File: src/pages/Home/Home.jsx
 * Purpose: Public landing page with quick links.
 * Author: Alex Kachur
 * Date: 2025-09-29
 */
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section>
            <h1>ResuMatch</h1>
            <p>AI-powered resume & career coach (shell only, no CSS).</p>

            {/* Primary navigation to core flows */}
            <ul>
                <li><Link to="/analysis">Start Analysis</Link></li>
                <li><Link to="/subscriptions">View Plans</Link></li>
                <li><Link to="/auth/login">Login</Link></li>
            </ul>
        </section>
    );
}