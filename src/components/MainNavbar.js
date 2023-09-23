import Logo from '../assets/images/logo.png'
import Camera from '../assets/images/camera.png'
import List from '../assets/images/list.png'
import Setting from '../assets/images/setting.png'
import { Link } from 'react-router-dom'
import '../assets/styles/components/MainNavbar.css'


export default function MainNavbar() {
    function handleActiveTab(index) {
        const list = document.querySelectorAll('.main-navbar .list')
        for (let i = 0; i < list.length; i++) 
            if (list[i].classList.contains('active'))
                list[i].classList.remove('active')
        list[index].classList.add('active')
    }

    return (
        <nav className='main-navbar p-4'>
            <Link to='/' className="row mb-5">
                <img src={Logo} alt="" />
            </Link>
            <div className="text-center">
                <Link to='/main' className="row px-2 py-3 my-4 active rounded-4 list" onClick={() => handleActiveTab(0)}>
                    <img src={Camera} alt="" />
                </Link>
                <Link to='/main/score' className="row px-2 py-3 my-4 rounded-4 list" onClick={() => handleActiveTab(1)}>
                    <img src={List} alt="" />
                </Link>
            </div>
            <div className="row">
                <img src={Setting} alt="" />
            </div>
        </nav>
    )
}
