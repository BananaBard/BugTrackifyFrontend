import { Outlet } from "react-router-dom"
import { Sidebar, SidebarItem } from "./items/Sidebar"
import { BarChart, Bug, Settings, TableProperties } from "lucide-react"

const DashboardLayout = () => {
    return (
        <div>
            <Sidebar>
                <SidebarItem text='Statistics' icon={<BarChart size={20} />} />
                <SidebarItem text='Projects' icon={<TableProperties size={20} />} alert />
                <SidebarItem text='Incidents' icon={<Bug size={20} />} />
                <SidebarItem text='Settings' icon={<Settings size={20} />} />
            </Sidebar>
            <Outlet />
        </div>
    )
}

export default DashboardLayout