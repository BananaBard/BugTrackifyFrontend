import { useMediaQuery } from 'usehooks-ts'
import { DesktopSidebar, SidebarItem } from './DesktopSidebar';
import { BarChart, Bug, Folder, LayoutDashboardIcon, Settings } from 'lucide-react';

const Sidebar = () => {
    const isDesktop = useMediaQuery('(min-width: 640px)');

    console.log(isDesktop)
    if (isDesktop) return (
        <DesktopSidebar>
            <SidebarItem text='Dashboard' icon={<LayoutDashboardIcon size={20} />} path="dashboard" />
            <SidebarItem text='Statistics' icon={<BarChart size={20} />} path="dashboard/statistics" />
            <SidebarItem text='Projects' icon={<Folder size={20} />} path="dashboard/projects" />
            <SidebarItem text='Incidents' icon={<Bug size={20} />} alert path="dashboard/incidents" />
            <SidebarItem text='Settings' icon={<Settings size={20} />} path="dashboard/settings" />
        </DesktopSidebar>
    )

    return <p>Mobile</p>

}

export default Sidebar