import { Outlet } from "react-router-dom"
import Header from "../Header"

const Layout = () => {
    return (
        <div className='flex flex-col gap-12 min-h-screen'>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Layout