// Import dependencies
import { useState } from 'react'

// Import components
import InputStandard from '../InputStandard/InputStandard';

// Import CSS module
import styles from './FormCreateEmployee.module.css'

function FormCreateEmployee() {
    // Local state (Form inputs)
    const initialState = {
        firstName: '',
        lastName: '',
    }

    const [employee, setEmployee] = useState(initialState);
    console.log(employee)
    return (
        <>
            <form className={styles.form}>
                <InputStandard
                    type="text"
                    label="First Name"
                    id="first-name"
                    name="firstName"
                    value={employee.firstName}
                    setState={e => { setEmployee({ ...employee, firstName: e.target.value }); }}
                />
                <InputStandard
                    type="text"
                    label="Last Name"
                    id="last-name"
                    name="lastName"
                    value={employee.lastName}
                    setState={e => { setEmployee({ ...employee, lastName: e.target.value }); }}
                />
            </form>
        </>
    )
}

export default FormCreateEmployee