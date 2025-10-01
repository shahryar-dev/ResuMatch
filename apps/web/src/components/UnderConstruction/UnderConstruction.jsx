/**
 * @file UnderConstruction.jsx
 * @author Alex Kachur
 * @since 2025-10-01
 * @purpose Provide a reusable placeholder panel while feature work is in flight.
 */
import PropTypes from "prop-types";
import styles from "./UnderConstruction.module.css";

export default function UnderConstruction({ feature }) {
    // TODO: Replace with feature-specific illustrations once design kit is available.
    return (
        <section className={styles.wrapper} aria-live="polite">
            <div className={styles.badge}>Under construction</div>
            <h2 className={styles.title}>{feature} is on the way</h2>
            <p className={styles.copy}>
                We’re polishing the experience right now. Check back soon!
            </p>
        </section>
    );
}

UnderConstruction.propTypes = {
    feature: PropTypes.string,
};

UnderConstruction.defaultProps = {
    feature: "This feature",
};
