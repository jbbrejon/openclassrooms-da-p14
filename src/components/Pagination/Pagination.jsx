// Import dependencies
import PropTypes from 'prop-types';

// Import CSS module
import styles from './Pagination.module.css'

const Pagination = ({ currentItemsLength, totalItemsLength, nPages, currentPage, setCurrentPage }) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <>
            <div className={styles.tableBottom}>
                <div className={styles.showing} >
                    Showing {currentItemsLength} of {totalItemsLength} entries
                </div>
                <div className={styles.pagination}>
                    <i className="fa-solid fa-circle-chevron-left" onClick={prevPage}></i>
                    <ul className={styles.ul}>
                        {pageNumbers.map(pgNumber => (
                            <li className={styles.li} key={pgNumber}>
                                <div onClick={() => setCurrentPage(pgNumber)}>{pgNumber}</div>
                            </li>
                        ))}
                    </ul>
                    <i className="fa-solid fa-circle-chevron-right" onClick={nextPage}></i>
                </div>
            </div>
        </>
    )
}
Pagination.propTypes = {
    currentItemsLength: PropTypes.number,
    totalItemsLength: PropTypes.number,
    nPages: PropTypes.number,
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
};

export default Pagination   