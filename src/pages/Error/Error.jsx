// Import dependencies
import { useEffect } from "react"

// Import CSS module
import styles from './Error.module.css'

/**
 * Error component
 * 
 * @returns {JSX.Element} - Rendered component.
 */
function Error() {
    useEffect(() => {
        document.title = "HRnet - Error";
    }, []);

    return (
        <main>
            <div className={styles.error}>Error 404</div>
            <div className={styles.message}>Page not found !</div>
        </main>
    )
}

export default Error