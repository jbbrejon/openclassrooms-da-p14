// Import dependencies
import { useEffect } from "react"

// Import components
import Heading1 from "../../components/Heading1/Heading1";

function CreateEmployee() {
    useEffect(() => {
        document.title = "HRnet - Create Employee";
    }, []);

    return (
        <main>
            <Heading1 h1="Create Employee" />
        </main>
    )
}

export default CreateEmployee