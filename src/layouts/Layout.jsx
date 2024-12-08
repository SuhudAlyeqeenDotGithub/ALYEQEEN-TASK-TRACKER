import { useLocation } from "react-router-dom";
import Header from "../components/Header"
import { Outlet } from "react-router-dom";

function Layout() {
  
    const location = useLocation()
    console.log(location.pathname)
    const pagesToHideOn = ["/login", "/signup"];
    
  return (
    <>
      {!pagesToHideOn.includes(location.pathname) && <Header />}
      <Outlet />
    </>
  )
}

export default Layout
