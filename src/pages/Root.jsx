import { Outlet } from "react-router-dom";
import {Header} from "../routes/Header";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Root = () => {
    const [isloggedin, setisloggedin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
    if(!isloggedin){
        navigate('/login');
    }
    }, [isloggedin, navigate]);
    const context = {
        login: () => setisloggedin(true),
    }
    return (
        <div>
            <Header isLoggedin={isloggedin} logout={() => setisloggedin(false)}/>
            <div className={"main"}>
                <Outlet context={context}/>  {/* outlet for nested routes */}
            </div>
           
            <Footer />   
        </div>
    );
};

export default Root;