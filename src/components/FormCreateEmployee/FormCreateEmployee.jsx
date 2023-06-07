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
    }
    const [employee, setEmployee] = useState(initialState);

    // Check if form is valid
    const getIsFormValid = () => {
        return (
            employee.firstName &&
            employee.lastName
        )
    }

    // Clear form after submission
    const clearForm = () => {
        setEmployee(initialState);
    }

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(employeeListActions.addEmployee(employee));
        clearForm();
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <InputStandard
                    type="text"
                    label="First Name"
                    id="first-name"
                    name="firstName"
                    value={employee.firstName}
                    change={e => { setEmployee({ ...employee, firstName: e.target.value }); }}
                />
                <InputStandard
                    type="text"
                    label="Last Name"
                    id="last-name"
                    name="lastName"
                    value={employee.lastName}
                    change={e => { setEmployee({ ...employee, lastName: e.target.value }); }}
                />
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