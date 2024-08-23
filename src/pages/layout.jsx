import { Outlet } from "react-router-dom"
import Navbar2 from '../components/Navbar/Navbar2'

function Layout(){

    return(
        <>
        <div className="nav1">
          <Navbar2 ></Navbar2>
        </div>
        <Outlet  ></Outlet>
        </>
    )
}
export default Layout