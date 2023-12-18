import { Outlet } from "react-router-dom";
import Navber from "./navber/Navber";
import Footer from "./Home/Footer";
import Partical from "./Partical/Partical";


const Root = () => {
    return (
        <div className="container mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;