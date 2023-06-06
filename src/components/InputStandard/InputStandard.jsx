// Import dependencies
import PropTypes from 'prop-types';

// Import CSS module
import styles from './InputStandard.module.css'

function InputStandard({ label, type, id, name, value, setState }) {

    return (
        <>
            <label className={styles.label} htmlFor={id} >{label}</label>
            <input className={styles.input} type={type} id={id} title={id} name={name} value={value} onChange={setState} />
        </>
    )
}

InputStandard.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    setState: PropTypes.func,
};

export default InputStandard