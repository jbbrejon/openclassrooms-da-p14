// Import dependencies
import { useEffect } from "react"

function CreateEmployee() {
    useEffect(() => {
        document.title = "HRnet - Create Employee";
    }, []);

    return (
        <main>Create Employee</main>
    )
}

export default CreateEmployee