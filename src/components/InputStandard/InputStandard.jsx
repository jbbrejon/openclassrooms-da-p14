// Import dependencies
import PropTypes from 'prop-types';

// Import CSS module
import styles from './InputStandard.module.css'

function InputStandard({ label, type, id, name, value, change }) {

    return (
        <>
            <label className={styles.label} htmlFor={id} >{label}</label>
            <input className={styles.input} type={type} id={id} title={id} name={name} value={value} onChange={change} />
        </>
    )
}

InputStandard.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    change: PropTypes.func,
};

export default InputStandard