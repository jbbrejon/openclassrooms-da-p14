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

    // Define table headers = ["First name", "Last name"]
    const th = [
        { name: "First name", id: "firstName" },
        { name: "Last name", id: "lastName" }
    ]

    // List of table headers elements
    const thList = th.map((th) =>
        <th className={styles.th} key={th.id}>
            <div className={styles.thContainer}>
                <div className={styles.thTitle}>
                    {th.name}
                </div>
                <div className={styles.thIcons}>
                    <i className="fa-solid fa-sort-up" data-cat="text" data-prop={th.id} order="ascending"></i>
                    <i className="fa-solid fa-sort-down" data-cat="text" data-prop={th.id} order="descending"></i>
                </div>
            </div>
        </th>
    )

    // List to table rows elements
    const trList = localEmployees.map((employee) =>
        <tr className={styles.tr} key={employee.id}>
            <td className={styles.td}>{employee.firstName}</td>
            <td className={styles.td}>{employee.lastName}</td>
        </tr>
    )


    console.log(localEmployees)
    return (
        <>
            <InputStandard
                type="text" label="Search: " id="search" name="search"
                change={e => { searchEmployee(e) }}
            />
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.trhead}>
                        {thList}
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {trList}
                </tbody>
            </table>
        </>
    )
}

export default TableEmployees