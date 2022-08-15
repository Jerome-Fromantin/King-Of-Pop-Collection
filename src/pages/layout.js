import { Outlet } from "react-router-dom"
import Banner from '../composants/Banner'
import Footer from '../composants/Footer'

const Layout = () => {
    return (<div>
        <Banner/>
        <Outlet/>
        <Footer/>
    </div>)
}

export default Layout
