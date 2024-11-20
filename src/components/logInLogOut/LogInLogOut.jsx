import './LogInLogOut.css';
import { useState } from 'react';
import EmployeeList from '../employeeList/EmployeeList';


export default function LogInLogOut(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickButton = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            <main>
                <button className={"button"} onClick={onClickButton}>
                {isLoggedIn ? "Log out": "Log in"}</button>
                {isLoggedIn ? <EmployeeList/> : <><p>Please log in to see the list</p></>}   
            </main>
        </div>
    )
}