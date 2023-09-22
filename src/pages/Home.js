import '../assets/styles/pages/Home.css'
import BgImage1 from '../assets/images/home-bg-1.png'
import BgImage2 from '../assets/images/home-bg-2.png'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="container-fluid home d-flex flex-column justify-content-center px-5">
            <img src={BgImage1} alt="" className='position-absolute'/>
            <img src={BgImage2} alt="" className='position-absolute'/>
            <div className="row">
                <div className="col-6">
                    <div className="title">Re-imagine Telemedicine</div>
                    <p className='fs-5 my-4'>Telemedicine allows health care professionals to evaluate, diagnose and treat patients at a distance using telecommunications technology. The approach has been through a striking evolution in the last decade.</p>
                    <div className="mt-5">
                        <Link to='/main' className='btn begin-now-btn text-light fs-5 me-4 py-2 px-4'>Begin Now</Link>
                        <Link to='/main' className='btn view-info-btn fs-5 py-2 px-4'>View Info</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
