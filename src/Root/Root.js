import NavBar from "../Components/Navbar/navBar";
import Footer from "../Components/Footer/footer";
import { Outlet } from "react-router-dom";




const  Root=()=>{
      
    return (
        <>
        <NavBar/>
        <Outlet/>
       <Footer/>
        </>
    );
}

export default Root;