import '../assets/styles/components/ScoreCard.css'

export default function ScoreCard(props) {
  return (
    <div className='score-card text-center py-2 rounded-3'>
        <header className="fs-5">{props.name}</header>
        <div className="loader rounded-circle d-flex align-items-strech p-4 mx-3">
            <div className="percentage fs-2 fw-bold bg-light w-100 d-flex justify-content-center align-items-center rounded-circle">98 %</div>
        </div>
        <section>
            <div className='fs-4 fw-bold'>Mental Health</div>
            <sub>Based off your audio answers</sub>
        </section>
    </div>
  )
}
