// Import dependencies
import { useEffect } from "react"

// Import components
import Heading1 from "../../components/Heading1/Heading1";
import FormCreateEmployee from "../../components/FormCreateEmployee/FormCreateEmployee";

/**
 * CreateEmployee component.
 * 
 * @returns {JSX.Element} - Rendered component.
 */
function CreateEmployee() {
    useEffect(() => {
        document.title = "HRnet - Create Employee";
    }, []);

    return (
        <main>
            <Heading1 h1="Create Employee" />
            <FormCreateEmployee />
        </main>
    )
}

export default CreateEmployee