import MainNavbar from "../components/MainNavbar";
import '../assets/styles/layout/MainLayout.css'
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="main-layout container-fluid">
            <div className="row">
                <div className="col-1">
                    <MainNavbar />
                </div>
                <div className="col-11">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}
