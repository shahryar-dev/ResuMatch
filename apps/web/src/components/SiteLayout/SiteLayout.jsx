/**
 * @file SiteLayout.jsx
 * @author Alex Kachur
 * @since 2025-10-01
 * @purpose Provide a professional application shell with a top header, sidebar navigation, and routed content.
 */
import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./SiteLayout.module.css";

export default function SiteLayout() {
    // Navigation data models keep markup lean and make it easy to extend with role-aware rules later.
    const sidebarGroups = [
        {
            id: "workspace",
            label: "Workspace",
            links: [
                { to: "/app", label: "Dashboard" },
                { to: "/analysis", label: "Resume Analysis" },
                { to: "/analysis/result", label: "Results" },
                { to: "/jobs", label: "Job Postings" },
            ],
        },
        {
            id: "account",
            label: "Account",
            links: [
                { to: "/subscriptions", label: "Plans" },
                { to: "/billing", label: "Billing" },
                { to: "/notifications", label: "Notifications" },
                { to: "/profile", label: "Profile" },
            ],
        },
    ];

    const headerLinks = [
        { to: "/auth/login", label: "Login" },
        { to: "/auth/register", label: "Sign up" },
    ];

    return (
        <div className={styles.shell}>
            <header className={styles.headerBar}>
                <div className={styles.headerInner}>
                    <Link to="/" className={styles.brand}>
                        ResuMatch
                    </Link>

                    <nav aria-label="Account shortcuts" className={styles.headerNav}>
                        <ul className={styles.headerList}>
                            {headerLinks.map(({ to, label }) => (
                                <li key={to} className={styles.headerItem}>
                                    <NavLink
                                        to={to}
                                        className={({ isActive }) =>
                                            isActive
                                                ? `${styles.headerLink} ${styles.headerLinkActive}`
                                                : styles.headerLink
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            <div className={styles.frame}>
                <div className={styles.frameInner}>
                    <aside className={styles.sidebar}>
                        {sidebarGroups.map(({ id, label, links }) => (
                            <nav key={id} aria-labelledby={`${id}-label`} className={styles.navSection}>
                                <p id={`${id}-label`} className={styles.navLabel}>
                                    {label}
                                </p>
                                <ul className={styles.navList}>
                                    {links.map(({ to, label: navLabel }) => (
                                        <li key={to} className={styles.navItem}>
                                            <NavLink
                                                to={to}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? `${styles.navLink} ${styles.navLinkActive}`
                                                        : styles.navLink
                                                }
                                            >
                                                {navLabel}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}

                        <div className={styles.sidebarFooter}>
                            {/* TODO: Replace callout with onboarding checklist once product spec RS-ONB-01 ships. */}
                            <p className={styles.sidebarNote}>
                                Need support? Email <a href="mailto:">support@placeholder.ai</a>
                            </p>
                        </div>
                    </aside>

                    <main className={styles.main} id="main-content">
                        <Outlet />
                    </main>
                </div>
            </div>

            <footer className={styles.footer}>
                © {new Date().getFullYear()} ResuMatch. All rights reserved.
            </footer>
        </div>
    );
}
