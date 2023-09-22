import { Route, Routes } from 'react-router-dom'
import Restart from '../assets/images/restart.png'
import '../assets/styles/pages/Main.css'
import ChatboxLayout from '../layout/ChatboxLayout'
import Questions from '../components/Questions'
import Answer from '../components/Answer'
import HeartRate from '../assets/images/heart-rate.png'
import { useEffect } from 'react'

export default function Main() {
    useEffect(() => {
        const camera = document.getElementById('camera')

        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                camera.srcObject = stream
            })
            .catch((error) => (console.log(error)))
    })

    return (
        <div className="main border-start border-2 rounded-4">
            <header className='container-fluid py-4 ps-4 border-bottom border-2'>
                <div className="row">
                    <div className="col-10">
                        <div className="fs-3 fw-bold">Answer Questions while we analyze your video</div>
                        <sub className="fs-5 text-secondary">Gather your results and look at our findings</sub>
                    </div>
                    <div className="col-2 d-flex restart">
                        <div className="restart-btn p-3 rounded-4 ">
                            <img src={Restart} alt="" width={30} />
                        </div>
                        <div className="d-flex align-items-center ms-3 fs-4">
                            Restart
                        </div>
                    </div>
                </div>
            </header>
            <section className='container-fluid'>
                <div className="row">
                    <div className="camera col-9 mt-4 text-center">
                        <video id="camera" className='rounded-4' autoPlay></video>
                    </div>
                    <aside className='question col-3 bg-light rounded-4 mt-4'>
                        <Routes>
                            <Route path='/' element={<ChatboxLayout />} >
                                <Route path='/' element={<Questions />} />
                                <Route path='/answer' element={<Answer />} />
                            </Route>
                        </Routes>
                    </aside>
                </div>
                <div className="row">
                    <div className="col-9 d-flex">
                        <div className="graph text-center rounded-3 mx-auto col-3 my-3 px-5 py-3 bg-light">
                            <div className="fs-3 fw-bold">Heart Rate</div>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="fs-1 me-2">68</div>
                                <div className="fs-6">bpm</div>
                            </div>
                            <div className="">
                                <img src={HeartRate} alt="" width={50} height={50} />
                            </div>
                        </div>
                        <div className="graph text-center rounded-3 mx-auto col-3 my-3 px-5 py-3 bg-light">
                            <div className="fs-3 fw-bold">HRV</div>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="fs-1 me-2">68</div>
                                <div className="fs-6">bpm</div>
                            </div>
                            <div className="">
                                <img src={HeartRate} alt="" width={50} height={50} />
                            </div>
                        </div>
                        <div className="graph text-center rounded-3 mx-auto col-3 my-3 px-5 py-3 bg-light">
                            <div className="fs-3 fw-bold">Stress</div>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="fs-1 me-2">68</div>
                                <div className="fs-6">bpm</div>
                            </div>
                            <div className="">
                                <img src={HeartRate} alt="" width={50} height={50} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
