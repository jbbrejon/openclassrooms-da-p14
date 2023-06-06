// Import dependencies
import { useEffect } from "react"

function EmployeeList() {
    useEffect(() => {
        document.title = "HRnet - Employee List";
    }, []);

    return (
        <main>Employee List</main>
    )
}

export default EmployeeList