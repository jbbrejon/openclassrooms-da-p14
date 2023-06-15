import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from './InputDatePicker.module.css'

/**
 * DatePicker component.
 *
 * @param {string} label - Form entry label
 * @param {string} id - Form entry id
 * @param {string} property - Property name
 * @param {object} object - Object to update
 * @param {func} change - Function to update state of parent component
 * @returns {JSX.Element} - Rendered component
 */
const InputDatePicker = ({ id, label, property, object, change, isSubmitted }) => {

    useEffect(() => {
        isSubmitted ? setDisplayedDate("") : null
    }, [isSubmitted]);

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
                id={id}
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
    isSubmitted: PropTypes.bool
};

export default InputDatePicker;