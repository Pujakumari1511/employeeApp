import styles from './LoginForm.module.css';
import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '../../components/buttons/Button';

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate(); 
    const {login} = useOutletContext();

    const validateCredentials = (e) => {
        e.preventDefault();
        if(username.toLowerCase() === "puja" && password === "1234"){
            login();
            navigate('/employees');
        }
        else{
            setLoginError(true)
        }
    }

    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={validateCredentials}>  
            {loginError && <p className={styles.loginError}>⚠️ Invalid credentials</p>}
                <div>
                    <label htmlFor="username">
                        Username:  
                        <input
                        id="username"
                        type="text"
                        onFocus={(e) => setLoginError(false)}
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
                        onFocus={(e) => setLoginError(false)}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <Button roleColor={"blueButton"} type="submit">Log in</Button>
            </form>
        </div>
    );
};
