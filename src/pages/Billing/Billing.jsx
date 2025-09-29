/**
 * File: src/pages/Billing/Billing.jsx
 * Purpose: Manage payment method and view invoices (placeholder).
 * Author: Alex Kachur
 * Date: 2025-09-29
 */

export default function Billing() {
    const paymentMethod = null; // e.g., "Visa **** 4242"

    function onUpdatePayment() {
        console.log("billing: update payment method");
        // TODO: open billing portal or payment sheet
    }

    return (
        <section>
            <h2>Billing</h2>
            <p>Payment method: {paymentMethod || "(none)"}</p>
            <button onClick={onUpdatePayment}>Update Payment Method</button>
        </section>
    );
}