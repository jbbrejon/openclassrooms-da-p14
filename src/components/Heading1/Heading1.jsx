// Import dependencies
import PropTypes from 'prop-types';

// Import CSS module
import styles from './Heading1.module.css'

/**
 * Heading1 component.
 *
 * @param {string} h1 - H1 content
 * @returns {JSX.Element} - Rendered component.
 */
function Heading1({ h1 }) {

    return (
        <>
            <h1 className={styles.h1}>{h1}</h1>
        </>
    )
}
Heading1.propTypes = {
    h1: PropTypes.string,
};

export default Heading1