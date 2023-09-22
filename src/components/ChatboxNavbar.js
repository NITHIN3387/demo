import { Link } from "react-router-dom";
import Question from '../assets/images/question-file.png'
import Answer from '../assets/images/answer.png'
import '../assets/styles/components/ChatboxNavbar.css'

export default function ChatboxNavbar() {
    function handleActiveTab(index) {
        const list = document.querySelectorAll('.chatbox-navbar .list')
        index ? list[0].classList.remove('active') : list[1].classList.remove('active')
        list[index].classList.add('active')
    }

    return (
        <div className="container-fluid my-3 mx-1 chatbox-navbar">
            <div className="row pb-3 border-bottom border-3">
                <Link to='/main' className="col-6 fs-5 fw-bold d-flex justify-content-center align-items-center rounded-3 py-2 active list" onClick={() => handleActiveTab(0)}>
                    <img src={Question} alt="" width='40' className="me-1" />
                    <div className="">Questions</div>
                </Link>
                <Link to='/main/answer' className="col-6 fs-5 fw-bold d-flex justify-content-center align-items-center rounded-3 py-2 list" onClick={() => handleActiveTab(1)}>
                    <img src={Answer} alt="" width='40' className="me-1" />
                    <div className="">Answers</div>
                </Link>
            </div>
        </div>
    )
}
