/**
 * File: src/pages/Notifications/Notifications.jsx
 * Purpose: Show recent system/user alerts (placeholder).
 * Author: Alex Kachur
 * Date: 2025-09-29
 */

export default function Notifications() {
    const items = [
        "Analysis ready for Resume v3",
        "Payment succeeded",
        "Usage at 80% of monthly quota",
    ];

    return (
        <section>
            <h2>Notifications</h2>
            <ul>
                {items.map((msg, idx) => (
                    <li key={idx}>{msg}</li>
                ))}
            </ul>
        </section>
    );
}