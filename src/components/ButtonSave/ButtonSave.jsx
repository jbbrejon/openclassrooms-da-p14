// Import dependencies
import PropTypes from 'prop-types';

// Import CSS module
import styles from './ButtonSave.module.css'

// React component : Save button
function ButtonSave({ status, valid, invalid }) {

    return (
        <>
            {status ? (
                <button className={styles.buttonDisabled} type='submit' disabled={status}>{invalid}</button>
            ) :
                (<button className={styles.button} type='submit' disabled={status}>{valid}</button>)
            }
        </>
    )
}

ButtonSave.propTypes = {
    status: PropTypes.bool,
    valid: PropTypes.string,
    invalid: PropTypes.string,
};

export default ButtonSave