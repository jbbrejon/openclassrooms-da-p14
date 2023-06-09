// Import dependencies
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import * as employeeListActions from '../../redux/slices/employeeListSlice'

// Import components
import InputStandard from '../InputStandard/InputStandard';
import ButtonSave from '../ButtonSave/ButtonSave';

// Import CSS module
import styles from './FormCreateEmployee.module.css'

function FormCreateEmployee() {

    // Global state (new instance of useDispatch)
    const dispatch = useDispatch()

    // Local state (Form inputs)
    const initialState = {
        id: uuidv4(),
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        zipCode: '',
    }
    const [employee, setEmployee] = useState(initialState);

    // Check if form is valid
    function getIsFormValid() {
        return (
            employee.firstName &&
            employee.lastName
        )
    }

    // Update employee properties
    function changeHandler(e) {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    }

    // Submit form
    function submitHandler(e) {
        e.preventDefault();
        dispatch(employeeListActions.addEmployee(employee));
        setEmployee(initialState);
    }

    return (
        <>
            <form className={styles.form} onSubmit={submitHandler}>
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
                    <InputStandard
                        type="number"
                        label="Zip Code"
                        id="zip-code"
                        name="zipCode"
                        value={employee.zipCode}
                        change={changeHandler}
                    />

                </fieldset>



                <ButtonSave
                    status={!getIsFormValid()}
                    valid="Create Employee"
                    invalid="Please fill in all fields"
                />
            </form>
        </>
    )
}

export default FormCreateEmployee