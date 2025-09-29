/**
 * File: src/pages/Dashboard/Dashboard.jsx
 * Purpose: Private hub after login; links to key features.
 * Author: Alex Kachur
 * Date: 2025-09-29
 */
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <section>
            <h2>Dashboard</h2>
            {/* Use Links to navigate without reloading */}
            <ul>
                <li><Link to="/analysis">Analyze Resume</Link></li>
                <li><Link to="/subscriptions">Plans</Link></li>
                <li><Link to="/jobs">Job Postings</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </section>
    );
}