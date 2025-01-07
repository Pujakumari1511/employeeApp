import { NavLink } from "react-router-dom";
import styles from './Header.module.css'

export const Header = ({isLoggedin, logout}) => {
    return (
        <div className={styles.header}>
            <h1>Employee App</h1>
            
            {isLoggedin && <nav>
                <ul style={{marginRight:"50px"}}>
                    <li><NavLink to="new">Add new</NavLink></li>
                    <li><NavLink to="employees">Employees</NavLink></li>
                    <li><NavLink onClick={logout} to="/">Log out</NavLink></li>
                </ul>
            </nav>}
        </div>
    )
}