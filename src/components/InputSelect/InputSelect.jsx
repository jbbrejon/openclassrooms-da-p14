// Import dependencies
import PropTypes from 'prop-types';
import { useState } from 'react'

// Import CSS module
import styles from './InputSelect.module.css'

/**
 * InputSelect component.
 *
 * @param {string} label - Form entry label
 * @param {string} type - Form entry type (text, number)
 * @param {array} options - Array containing options to display
 * @param {string, num } value - Value of input (string or number)
 * @param {func} change - Function to update state of parent component
 * @returns {JSX.Element} - Rendered component.
 */
function InputSelect({ label, type, options, value, change }) {
    // Local state (display options)
    const [displayOptions, setDisplayOptions] = useState(false);

    // List of options
    let list = options.map((option) =>
        <li
            className={styles.li}
            key={option.name}
            type={type}
            name={option.label}
            onClick={change}
            tabIndex="0"
        >
            {option.label}
        </li>
    )

    function toggleOptions() {
        setDisplayOptions(!displayOptions)
    }

    return (
        <>
            <div className={styles.label}>{label}</div>
            {displayOptions ?
                <div className={styles.selectMenu} >
                    <div className={styles.select} onClick={toggleOptions} >
                        <div className={styles.value}>{value} </div>
                        <i className="fa-solid fa-chevron-up"></i></div>
                    <ul className={styles.ul} onMouseLeave={toggleOptions} onClick={toggleOptions} >{list}</ul>
                </div>
                :
                <div className={styles.selectMenu}  >
                    <div className={styles.select} onClick={toggleOptions} >
                        <div className={styles.value}>{value} </div>
                        <i className="fa-solid fa-chevron-down"></i></div>
                </div>
            }
        </>
    )
}

// PropTypes
InputSelect.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    property: PropTypes.string,
    change: PropTypes.func,
};

export default InputSelect