import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 py-3">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center fs-4 fw-bolder" to='/'>
                    <img src={Logo} alt="Logo" width="35" height="35" className="me-2"/>
                    VITA FACE
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-center">
                        <li className="nav-item mx-4 fs-5">
                            <Link className="nav-link active" to='/'>Home</Link>
                        </li>
                        <li className="nav-item mx-4 fs-5">
                            <Link className="nav-link active" to='/'>Heart</Link>
                        </li>
                        <li className="nav-item mx-4 fs-5">
                            <Link className="nav-link active" to='/'>Ear</Link>
                        </li>
                        <li className="nav-item mx-4 fs-5">
                            <Link className="nav-link active" to='/'>Skin</Link>
                        </li>
                        <li className="nav-item mx-4 fs-5">
                            <Link className="nav-link active" to='/'>Contact</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item">
                            <button className="btn btn-primary py-2 fw-bold">Log In</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
