import PropTypes from 'prop-types';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from './InputDatePicker.module.css'


const InputDatePicker = ({ id, label, property, object, change }) => {

    const [displayedDate, setDisplayedDate] = useState("")

    function handleChange(e) {
        setDisplayedDate(e)
        change({ ...object, [property]: e?.toLocaleDateString("fr-FR") })
    }

    return (
        <>
            <label className={styles.label} htmlFor={id} >{label}</label>
            <DatePicker
                className={styles.datePicker}
                selected={displayedDate && displayedDate}
                onChange={(e) => handleChange(e)}
                dateFormat="dd/MM/yyyy"
                closeOnScroll={true}
                clearButtonClassName="clear-button"
                required
            />
        </>

    );
};

InputDatePicker.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    property: PropTypes.string,
    object: PropTypes.object,
    change: PropTypes.func,
};

export default InputDatePicker;