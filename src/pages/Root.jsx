import { Outlet } from "react-router-dom";
import {Header} from "../routes/Header";
import Footer from "../components/footer/Footer";

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root;