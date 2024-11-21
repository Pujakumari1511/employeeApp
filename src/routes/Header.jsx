import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <h1>Employee App</h1>
            <nav>
                <ul>
                    <li><NavLink to="list">List</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}