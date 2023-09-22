import ChatboxNavbar from "../components/ChatboxNavbar";
import { Outlet } from "react-router-dom";
import GoBack from '../assets/images/go-back.png'
import Skip from '../assets/images/skip.png'

export default function ChatboxLayout() {
    return (
        <div className="container-fluid">
            <div className="row">
                <ChatboxNavbar />
            </div>
            <div className="row">
                <div className="col-6 d-flex justify-content-center mb-3">
                    <div className="bg-success text-light fs-2 rounded-3 text-center me-2" style={{minWidth: '49.5px'}}>0</div>
                    <div className="ms-2">Questions Completed</div>
                </div>
                <div className="col-6 d-flex justify-content-center mb-3">
                    <div className="bg-danger text-light fs-2 rounded-3 text-center me-2" style={{minWidth: '49.5px'}}>10</div>
                    <div className="ms-2">Remaining Prompts</div>
                </div>
            </div>
            <div className="row">
                <Outlet />
            </div>
            <div className="row">
                <div className="col-6 d-flex justify-content-center py-2 border border-2 my-3 btn">
                    <img src={GoBack} alt="" width='25' />
                    <div className="ms-2">Go Back</div>
                </div>
                <div className="col-6 d-flex justify-content-center py-2 border border-2 my-3 btn">
                    <img src={Skip} alt="" width='25' />
                    <div className="ms-2">Skip</div>
                </div>
            </div>
        </div>
    )
}
