import { Outlet } from "react-router-dom"
import { ModeToggle } from "../ModeToggle"
import Sidebar from "../Sidebars/Sidebar"

const DashboardLayout = () => {
    return (
        <div className="flex">
            <Sidebar/>
            <span className="absolute top-2 right-2">
                <ModeToggle />
            </span>
            <Outlet />
        </div>
    )
}

export default DashboardLayout