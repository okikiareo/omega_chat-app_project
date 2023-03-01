import { useState, useEffect } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Intro from "../pages/Intro";

const RootLayout = () => {
    const [loader, setLoader] = useState({
        active: false
    });
    const location = useLocation();
    const authPass = { pass: true};
    
    useEffect(() => {
        if (location.pathname !== "/") return;
        if (location.pathname === "/") {
            setLoader({ active: true });
        }
        const timer = setTimeout(() => {
            setLoader({ active: false });
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return ( 
        <main className="main">
            { authPass.pass ? loader.active ? <Intro /> : <Outlet /> 
            : <Navigate to="/login" /> }
        </main>
     );
}
 
export default RootLayout;