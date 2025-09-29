/**
 * File: src/pages/Subscriptions/Subscriptions.jsx
 * Purpose: Simple plan list and subscribe action (placeholder).
 * Author: Alex Kachur
 * Date: 2025-09-29
 */

export default function Subscriptions() {
    // Later: plans from API
    const plans = [
        { id: "free", name: "Free", detail: "Basic usage" },
        { id: "basic", name: "Basic", detail: "More analysis runs" },
        { id: "pro", name: "Premium", detail: "All features unlocked" },
    ];

    function onSubscribeClick(planId) {
        console.log("subscribe:", planId);
        // TODO: redirect to checkout or call API
    }

    return (
        <section>
            <h2>Plans</h2>
            <ul>
                {plans.map((p) => (
                    <li key={p.id}>
                        {p.name} — {p.detail}{" "}
                        <button onClick={() => onSubscribeClick(p.id)}>Choose</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}