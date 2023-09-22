import { Outlet } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
import '../assets/styles/layout/Layout.css'

export default function Layout() {
  return (
    <div className="layout">
        <HomeNavbar />
        <div className="fluid-container">
            <Outlet />
        </div>
    </div>
  )
}
