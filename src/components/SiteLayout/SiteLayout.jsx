/**
 * File: src/components/SiteLayout/SiteLayout.jsx
 * Purpose: Global layout with a simple nav and an <Outlet> for pages.
 * Author: Alex Kachur
 * Date: 2025-09-29
 */
import { Link, Outlet } from "react-router-dom";

export default function SiteLayout() {
    return (
        <>
            {/* Use <Link> (client-side) to avoid full page reloads */}
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/auth/login">Login</Link> |{" "}
                <Link to="/auth/register">Register</Link> |{" "}
                <Link to="/app">Dashboard</Link> |{" "}
                <Link to="/analysis">Analyze</Link> |{" "}
                <Link to="/subscriptions">Plans</Link> |{" "}
                <Link to="/billing">Billing</Link> |{" "}
                <Link to="/jobs">Jobs</Link> |{" "}
                <Link to="/notifications">Notifications</Link> |{" "}
                <Link to="/profile">Profile</Link>
            </nav>

            <hr />

            {/* Child routes render here */}
            <main>
                <Outlet />
            </main>
        </>
    );
}