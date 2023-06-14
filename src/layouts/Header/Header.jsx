// Import dependencies
import { NavLink } from 'react-router-dom'

// Import assets
import logo from '../../assets/images/logo/logo.png'

// Import CSS module
import styles from './Header.module.css'

/**
 * Header component.
 * 
 * @returns {JSX.Element} - Rendered component.
 */
function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.identity}>
                <img src={logo} className={styles.logo} alt="logo" width="110" height="110" />
                <p className={styles.appName}>HRnet</p>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li className={styles.link}><NavLink className={styles.navLink} to='/'>Home</NavLink></li>
                    <li className={styles.link}><NavLink className={styles.navLink} to='/employee-list'>Employee list</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header