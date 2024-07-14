import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebars/Sidebar"
import SidebarProvider from "@/context/SidebarContext"
import DashboardBreadcrum from "../DashboardBreadcrum"
import useHistory from "@/hooks/onUseHistory"

const DashboardLayout = () => {
    const history = useHistory();
    return (
        <div className="flex">
            <SidebarProvider>
                <Sidebar />
            </SidebarProvider>
            <main className='px-4 py-24 sm:p-8 sm:ml-24 w-full h-screen'>
                <div className="flex justify-between items-center mb-4">
                    <DashboardBreadcrum history={history} />
                </div>
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout