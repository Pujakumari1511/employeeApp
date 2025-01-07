import styles from './LoginForm.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm = ({login}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate(); 

    const validateCredentials = (e) => {
        e.preventDefault();
        if(username.toLowerCase() === "puja" && password === "1234"){
            login();
            navigate('/employees');
        }
        else{
            alert("Invalid credentials");
        }
    }

    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={validateCredentials}>  
                <div>
                    <label htmlFor="username">
                        Username:  
                        <input
                        id="username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        Password:
                        <input
                        id="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};
