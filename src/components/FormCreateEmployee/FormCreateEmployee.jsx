// Import dependencies
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import Modal from "@jbbrejon/react-modal";
import '@jbbrejon/react-modal/dist/style.css'

// Import Redux actions
import * as employeeListActions from '../../redux/slices/employeeListSlice'

// Import components
import InputStandard from '../InputStandard/InputStandard';
import InputSelect from '../InputSelect/InputSelect';
import InputDatePicker from '../InputDatePicker/InputDatePicker';
import ButtonSave from '../ButtonSave/ButtonSave';

// Import data
import departments from '../../data/departments';
import states from '../../data/states';

// Import CSS module
import styles from './FormCreateEmployee.module.css'

/**
 * FromCreateEmployee component.
 * 
 * @returns {JSX.Element} - Rendered component.
 */
function FormCreateEmployee() {

    // Global state (new instance of useDispatch)
    const dispatch = useDispatch()

    // Local state (Form inputs)
    const initialState = {
        id: uuidv4(),
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: ''
    }
    const [employee, setEmployee] = useState(initialState);

    // Local state (Display modal)
    const [displayModal, setDisplayModal] = useState(false)

    // Toggle modal
    function toggleModal() {
        setDisplayModal(!displayModal)
    }

    // Check if form is valid
    function getIsFormValid() {
        return (
            employee.firstName &&
            employee.lastName &&
            employee.dateOfBirth &&
            employee.startDate &&
            employee.street &&
            employee.city &&
            employee.state &&
            employee.zipCode &&
            employee.department
        )
    }

    // Update employee properties
    function changeHandler(e) {
        if (e.target.name) {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
        }
        else {
            setEmployee({ ...employee, [e.target.attributes.type.value]: e.target.attributes.name.value });
        }
    }

    // Submit form
    function submitHandler(e) {
        e.preventDefault();
        dispatch(employeeListActions.addEmployee(employee));
        setEmployee(initialState);
        toggleModal();
    }

    return (
        <>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.inputsContainer}>
                    <div className={styles.formColumn}>
                        <InputStandard
                            type="text"
                            label="First Name"
                            id="first-name"
                            name="firstName"
                            value={employee.firstName}
                            change={changeHandler}
                        />
                        <InputStandard
                            type="text"
                            label="Last Name"
                            id="last-name"
                            name="lastName"
                            value={employee.lastName}
                            change={changeHandler}
                        />
                        <InputDatePicker
                            id="birth-date"
                            label="Date of Birth"
                            change={setEmployee}
                            object={employee}
                            property="dateOfBirth"
                        />
                        <InputDatePicker
                            id="start-date"
                            label="Start Date"
                            change={setEmployee}
                            object={employee}
                            property="startDate"
                        />
                        <InputSelect
                            label="Department"
                            type="department"
                            options={departments}
                            value={employee.department}
                            change={changeHandler}
                        />

                    </div>
                    <div className={styles.formColumn}>
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Address</legend>
                            <InputStandard
                                type="text"
                                label="Street"
                                id="street"
                                name="street"
                                value={employee.street}
                                change={changeHandler}
                            />
                            <InputStandard
                                type="text"
                                label="City"
                                id="city"
                                name="city"
                                value={employee.city}
                                change={changeHandler}
                            />

                            <InputSelect
                                label="States"
                                type="state"
                                options={states}
                                value={employee.state}
                                change={changeHandler}
                            />

                            <InputStandard
                                type="number"
                                label="Zip Code"
                                id="zip-code"
                                name="zipCode"
                                value={employee.zipCode}
                                change={changeHandler}
                            />
                        </fieldset>

                    </div>
                </div>
                <ButtonSave
                    status={!getIsFormValid()}
                    valid="Create Employee"
                    invalid="Please fill in all fields"
                />
            </form>
            {displayModal ? <Modal message="Employee Created!" toggle={toggleModal} /> : null}
        </>
    )
}

export default FormCreateEmployee