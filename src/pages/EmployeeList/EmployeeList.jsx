// Import dependencies
import { useEffect } from "react"

// Import components
import Heading1 from "../../components/Heading1/Heading1";
import TableEmployees from "../../components/TableEmployees/TableEmployees";

/**
 * EmployeeList component.
 * 
 * @returns {JSX.Element} - Rendered component.
 */
function EmployeeList() {
    useEffect(() => {
        document.title = "HRnet - Employee List";
    }, []);

    return (
        <main>
            <Heading1 h1="Employee List" />
            <TableEmployees />
        </main>
    )
}

export default EmployeeList