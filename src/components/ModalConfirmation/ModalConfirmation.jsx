// Import dependencies
import PropTypes from 'prop-types';

// Import CSS module
import styles from './ModalConfirmation.module.css'

function ModalConfirmation({ message, toggle }) {
    return (
        <>
            <div id="myModal" className={styles.modal}>
                <div className={styles.modalContent}>
                    <p>{message}</p>
                    <span className={styles.close} onClick={toggle}>&times;</span>
                </div>
            </div>
        </>
    )
}

ModalConfirmation.propTypes = {
    message: PropTypes.string,
    toggle: PropTypes.func,
};

export default ModalConfirmation