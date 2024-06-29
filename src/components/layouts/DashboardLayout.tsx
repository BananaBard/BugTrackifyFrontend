import { Outlet } from "react-router-dom"
import { Sidebar, SidebarItem } from "./items/Sidebar"
import { BarChart, Bug, LayoutDashboardIcon, Settings, TableProperties } from "lucide-react"
import { ModeToggle } from "../ModeToggle"

const DashboardLayout = () => {
    return (
        <div className="flex">
            <Sidebar>
                <SidebarItem text='Dashboard' icon={<LayoutDashboardIcon size={20} />} path="dashboard" />
                <SidebarItem text='Statistics' icon={<BarChart size={20} />} path="dashboard/statistics" />
                <SidebarItem text='Projects' icon={<TableProperties size={20} />} path="dashboard/projects" />
                <SidebarItem text='Incidents' icon={<Bug size={20} />} alert path="dashboard/incidents" />
                <SidebarItem text='Settings' icon={<Settings size={20} />} path="dashboard/settings" />
            </Sidebar>
            <span className="absolute top-2 right-2">
                <ModeToggle />
            </span>
            <Outlet />
        </div>
    )
}

export default DashboardLayout