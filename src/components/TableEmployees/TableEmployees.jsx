// Import dependencies
import { useState } from 'react'
import { useSelector } from 'react-redux'

// Import Redux selector
import { selectEmployeeList } from '../../redux/selectors/selectors'

// Import components
import InputStandard from '../InputStandard/InputStandard'
import InputSelect from '../InputSelect/InputSelect'
import Pagination from '../Pagination/Pagination'
import Table from '../Table/Table'

// Import data
import tableLengthOptions from '../../data/tableLengthOptions'

// Import CSS module
import styles from './TableEmployees.module.css'

/**
 * TableEmployees component.
 * 
 * @returns {JSX.Element} - Rendered component.
 */
function TableEmployees() {
    // Employees from Redux store
    const employees = useSelector(selectEmployeeList)
    // Local state (employees)
    const [localEmployees, setLocalEmployees] = useState(employees)

    // Local state (pagination)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1);

    // Variables for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = localEmployees.slice(indexOfFirstItem, indexOfLastItem);
    const nPages = Math.ceil(localEmployees.length / itemsPerPage)

    // Change local state for pagination
    function changeTableLength(e) {
        setItemsPerPage(parseInt(e.target.attributes.name.value))
    }


    // Search employee (all properties)
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

    // Sort employees (all properties, ascending or descending)
    const sortData = (e) => {
        const cat = e.target.dataset.cat;
        const prop = e.target.dataset.prop;
        const order = e.target.dataset.order;
        let result = [...localEmployees];
        if (order === "descending") {
            if (cat === "text") {
                result = result.sort(function (a, b) { return b[prop].localeCompare(a[prop]) })
            }
            else if (cat === "number") {
                result = result.sort(function (a, b) { return b[prop] - a[prop] })
            }
            else {
                console.log("cat unknown")
            }

        }
        else if (order === "ascending") {
            if (cat === "text") {
                result = result.sort(function (a, b) { return a[prop].localeCompare(b[prop]) })
            }
            else if (cat === "number") {
                result = result.sort(function (a, b) { return a[prop] - b[prop] })
            }
            else {
                console.log("cat unknown")
            }
        }
        else {
            console.log("order unknown")
        }
        setLocalEmployees([...result]);
    }




    // Define table headers = ["First name", "Last name"]
    const th = [
        { name: "First name", id: "firstName" },
        { name: "Last name", id: "lastName" },
        { name: "Start date", id: "startDate" },
        { name: "Department", id: "department" },
        { name: "Date of Birth", id: "dateOfBirth" },
        { name: "Street", id: "street" },
        { name: "City", id: "city" },
        { name: "State", id: "state" },
        { name: "Zip Code", id: "zipCode" }
    ]

    // List of table headers elements
    const thList = th.map((th) =>
        <th className={styles.th} key={th.id}>
            <div className={styles.thContainer}>
                <div className={styles.thTitle}>
                    {th.name}
                </div>
                <div className={styles.thIcons}>
                    <i className="fa-solid fa-sort-up" data-cat="text" data-prop={th.id} data-order="descending" onClick={sortData}></i>
                    <i className="fa-solid fa-sort-down" data-cat="text" data-prop={th.id} data-order="ascending" onClick={sortData}></i>
                </div>
            </div>
        </th>
    )

    // List to table rows elements
    const trList = currentItems.map((employee) =>
        <tr className={styles.tr} key={employee.id}>
            <td className={styles.td}>{employee.firstName}</td>
            <td className={styles.td}>{employee.lastName}</td>
            <td className={styles.td}>{employee.startDate}</td>
            <td className={styles.td}>{employee.department}</td>
            <td className={styles.td}>{employee.dateOfBirth}</td>
            <td className={styles.td}>{employee.street}</td>
            <td className={styles.td}>{employee.city}</td>
            <td className={styles.td}>{employee.state}</td>
            <td className={styles.td}>{employee.zipCode}</td>
        </tr>
    )

    return (
        <><div className={styles.tableContainer}>
            <div className={styles.filters}>
                <div className={styles.tableLength}>
                    <InputSelect
                        label="Show entries"
                        type="tableLenght"
                        options={tableLengthOptions}
                        value={itemsPerPage}
                        change={changeTableLength}
                    />
                </div>
                <div className={styles.search}>
                    <InputStandard
                        type="text" label="Search: " id="search" name="search"
                        change={e => { searchEmployee(e) }}
                    />
                </div>
            </div>
            <Table
                thList={thList}
                trList={trList}
            />

            <Pagination
                currentItemsLength={localEmployees.slice(indexOfFirstItem, indexOfLastItem).length}
                totalItemsLength={localEmployees.length}
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
        </>
    )
}

export default TableEmployees