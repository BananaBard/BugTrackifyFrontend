import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebars/Sidebar"
import SidebarProvider from "@/context/SidebarContext"
import DashboardBreadcrum from "../DashboardBreadcrum"
import useHistory from "@/hooks/useHistory"
import { ModeToggle } from "../ModeToggle"
import { useMediaQuery } from "usehooks-ts"

const DashboardLayout = () => {
    const history = useHistory();
    const isDesktop = useMediaQuery('(min-width: 640px)')
    return (
        <div className="flex">
            <SidebarProvider>
                <Sidebar />
            </SidebarProvider>
            {
                isDesktop && 
                <div className="absolute top-4 right-8">
                    <ModeToggle/>
                </div>
            }
            
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