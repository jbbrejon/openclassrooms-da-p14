// Import dependencies
import PropTypes from 'prop-types';

// Import CSS module
import styles from './ButtonSave.module.css'

// React component : Save button
function ButtonSave({ action }) {

    return (
        <>
            <button className={styles.button} type='submit' onClick={action}>Save</button>
        </>
    )
}

ButtonSave.propTypes = {
    action: PropTypes.func,
};

export default ButtonSave