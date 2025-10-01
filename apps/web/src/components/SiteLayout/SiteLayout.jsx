/**
 * @file SiteLayout.jsx
 * @author Alex Kachur
 * @since 2025-09-29
 * @purpose Provide the global shell (header, nav, outlet, footer) shared across routes.
 */
import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./SiteLayout.module.css";

export default function SiteLayout() {
    // Central definition keeps nav items consistent across layout and future mobile menus.
    // TODO: Replace static routes with role/plan-aware navigation once auth + FR_SUB05 gating is implemented.
    const primaryLinks = [
        { to: "/", label: "Home", end: true },
        { to: "/auth/login", label: "Login" },
        { to: "/auth/register", label: "Register" },
        { to: "/app", label: "Dashboard" },
        { to: "/analysis", label: "Analyze" },
        { to: "/subscriptions", label: "Plans" },
        { to: "/billing", label: "Billing" },
        { to: "/jobs", label: "Jobs" },
        { to: "/notifications", label: "Notifications" },
        { to: "/profile", label: "Profile" },
    ];

    return (
        <div className={styles.shell}>
            <header className={styles.header}>
                <div className={styles.headerInner}>
                    <Link to="/" className={styles.brand}>
                        ResuMatch
                    </Link>

                    <ul className={styles.navList}>
                        {primaryLinks.map(({ to, label, end }) => (
                            <li key={to} className={styles.navItem}>
                                <NavLink
                                    to={to}
                                    end={end}
                                    className={({ isActive }) =>
                                        isActive
                                            ? `${styles.navLink} ${styles.navLinkActive}`
                                            : styles.navLink
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>

            <div className={styles.content}>
                <main className={styles.main}>
                    <Outlet />
                </main>
            </div>

            <footer className={styles.footer}>
                © {new Date().getFullYear()} ResuMatch. All rights reserved.
            </footer>
        </div>
    );
}
