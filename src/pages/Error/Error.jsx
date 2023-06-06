// Import dependencies
import { useEffect } from "react"

function Error() {
    useEffect(() => {
        document.title = "HRnet - Error";
    }, []);

    return (
        <main>Error</main>
    )
}

export default Error