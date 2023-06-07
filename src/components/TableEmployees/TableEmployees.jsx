// Import dependencies
import { useState } from 'react'
import { useSelector } from 'react-redux'

// Import Redux selector
import { selectEmployeeList } from '../../redux/selectors/selectors'

// Import components
import InputStandard from '../InputStandard/InputStandard'

// Import CSS module
import styles from './TableEmployees.module.css'

function TableEmployees() {
    // Employees from Redux store
    const employees = useSelector(selectEmployeeList)
    // Employees from local state (filtered, sorted)
    const [localEmployees, setLocalEmployees] = useState(employees)

    // Search employees
    const searchEmployee = (e) => {
        let searchResult = [];
        if (e.target.value.length > 0) {
            searchResult = employees.filter(o =>
                Object.keys(o).some(k => o[k].toLowerCase().includes(e.target.value.toLowerCase())));
            setLocalEmployees([...searchResult])
        }
        else {
            setLocalEmployees(employees);
        }
    }

    console.log(localEmployees)
    return (
        <>
            <InputStandard
                type="text" label="Search: " id="search" name="search"
                change={e => { searchEmployee(e) }}
            />
        </>
    )
}

export default TableEmployees