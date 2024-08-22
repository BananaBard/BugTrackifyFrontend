import { useMediaQuery } from 'usehooks-ts'
import { DesktopSidebar } from './DesktopSidebar';
import { BarChart, Bug, Folder, HomeIcon, LayoutDashboardIcon, Settings } from 'lucide-react';
import MobileSidebar from './MobileSidebar';
import { SidebarItem } from './SidebarItem';

const Sidebar = () => {
    const isDesktop = useMediaQuery('(min-width: 640px)');

    if (isDesktop) return (
        <DesktopSidebar>
            <SidebarItem text='Home' icon={<HomeIcon size={20} />} path="/" />
            <SidebarItem text='Dashboard' icon={<LayoutDashboardIcon size={20} />} path="dashboard" />
            <SidebarItem text='Statistics' icon={<BarChart size={20} />} path="dashboard/statistics" />
            <SidebarItem text='Projects' icon={<Folder size={20} />} path="dashboard/projects" />
            <SidebarItem text='Incidents' icon={<Bug size={20} />} alert path="dashboard/incidents" />
            <SidebarItem text='Settings' icon={<Settings size={20} />} path="dashboard/settings" />
        </DesktopSidebar>
    )

    return <MobileSidebar>
            <SidebarItem text='Home' icon={<HomeIcon size={20} />} path="/" />
            <SidebarItem text='Dashboard' icon={<LayoutDashboardIcon size={20} />} path="dashboard" />
            <SidebarItem text='Statistics' icon={<BarChart size={20} />} path="dashboard/statistics" />
            <SidebarItem text='Projects' icon={<Folder size={20} />} path="dashboard/projects" />
            <SidebarItem text='Incidents' icon={<Bug size={20} />} alert path="dashboard/incidents" />
            <SidebarItem text='Settings' icon={<Settings size={20} />} path="dashboard/settings" />
    </MobileSidebar>

}

export default Sidebar