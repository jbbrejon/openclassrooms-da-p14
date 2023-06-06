// Import dependencies
import { useEffect } from "react"

// Import components
import Heading1 from "../../components/Heading1/Heading1";

function EmployeeList() {
    useEffect(() => {
        document.title = "HRnet - Employee List";
    }, []);

    return (
        <main>
            <Heading1 h1="Employee List" />
        </main>
    )
}

export default EmployeeList