import Restart from '../assets/images/restart.png'
import ScoreCard from '../components/ScoreCard'
import '../assets/styles/pages/Score.css'
import Prognosis from '../components/Prognosis'

export default function Score() {
    return (
        <div className='score border-start border-2 rounded-4'>
            <header className='container-fluid py-4 ps-4 border-bottom border-2'>
                <div className="row">
                    <div className="col-10">
                        <div className="fs-3 fw-bold">Gather your results and look at our findings</div>
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
            <div className="container-fluid p-3">
                <div className="row">
                    <header className='fs-5 fw-bold ms-4 ps-4'>Your Results</header>
                </div>
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            <div className="col-3 mx-5 my-4 p-0 rounded-3 bg-light">
                                <ScoreCard name={'PHYSICAL SCORE'}/>
                            </div>
                            <div className="col-3 me-5 my-4 p-0 rounded-3 bg-light">
                                <ScoreCard name={'MENTAL SCORE'} />
                            </div>
                            <div className="col-3 me-5 my-4 p-0 rounded-3 bg-light">
                                <ScoreCard name={'HEART RATE GRAPH'} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 mx-5 my-4 p-0 rounded-3 bg-light">
                                <ScoreCard name={'HRV GRAPH'} />
                            </div>
                            <div className="col-3 me-5 my-4 p-0 rounded-3 bg-light">
                                <ScoreCard name={'STRESS GRAPH'} />
                            </div>
                        </div>
                    </div>
                    <div className="col-3 my-4 p-0 rounded-3 bg-light prognosis">
                        <Prognosis />
                    </div>
                </div>
            </div>
        </div>
    )
}
