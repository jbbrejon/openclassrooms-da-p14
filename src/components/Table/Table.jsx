// Import dependencies
import PropTypes from 'prop-types';

// Import CSS module
import styles from './Table.module.css'

/**
 * Table component.
 *
 * @param {array} thList - List of HMTL table headers
 * @param {array} trList - List of HMTL table rows
 * @returns {JSX.Element} - Rendered component.
 */
function Table({ thList, trList }) {
    return (
        <>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.trhead}>
                        {thList}
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {trList}
                </tbody>
            </table>
        </>
    )
}

// PropTypes
Table.propTypes = {
    thList: PropTypes.array,
    trList: PropTypes.array,
};

export default Table