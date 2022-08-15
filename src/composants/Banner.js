import { Link } from "react-router-dom"
import '../styles/layout.css'
import MJ1969 from '../assets/images/layout/MJ1969.jpg'
import logo from '../assets/images/layout/Logo.png'
import MJ2009 from '../assets/images/layout/MJ2009.jpg'

function Banner() {
    const title = "King Of Pop Collection"
    return (<div className="wholeBanner">
        <div className="mjBannerLeft">
            <img src={MJ1969} alt="Michael Jackson en 1969" title="Michael Jackson en 1969" className="mjBanner"/>
        </div>
        <div className="centerBanner">
            <div className="centerLink">
                <Link to="/"><img src={logo} alt="Logo King of Pop" title="Accueil" className="logo"/></Link>
            </div>
            <div className="centerTitle">
                <h1 className="title">{title}</h1>
            </div>
        </div>
        <div className="mjBannerRight">
            <img src={MJ2009} alt="Michael Jackson en 2009" title="Michael Jackson en 2009" className="mjBanner"/>
        </div>
    </div>)
}

export default Banner