import { NavLink } from "react-router-dom";
import './Header.css'

export const Header = () => {
    return (
        <div className={"header"}>
            <h1>Employee App</h1>
            <nav>
                <ul style={{marginRight:"50px"}}>
                    <li><NavLink to="new">Add new</NavLink></li>
                    <li><NavLink to="employees">Employees</NavLink></li>
                    <li><NavLink to="login">LogIn</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}