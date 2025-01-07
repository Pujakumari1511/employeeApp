import { Outlet } from "react-router-dom";
import {Header} from "../routes/Header";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import { LoginForm }from "./Login/LoginForm";

const Root = () => {
    const [isloggedin, setisloggedin] = useState(false);
    return (
        <div>
            <Header isLoggedin={isloggedin} logout={() => setisloggedin(false)}/>
            <div className={"main"}>
                {isloggedin 
                ? <Outlet />   
                : <LoginForm login={() => setisloggedin(true)}/>} 
            </div>
           
            <Footer />   
        </div>
    );
};

export default Root;