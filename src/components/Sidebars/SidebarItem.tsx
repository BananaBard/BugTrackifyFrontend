import { useSidebar } from "@/context/SidebarContext";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface SidebarItemProps {
    icon: ReactNode;
    text: string;
    alert?: boolean;
    path: string;
}

export const SidebarItem = ({ icon, text, alert, path }: SidebarItemProps) => {
    const {expanded,activeItem, setActiveItem} = useSidebar();
    const navigate = useNavigate();
    
    const isActive = activeItem == text

    const onSidebarRedirect = () => {
        setActiveItem(text);
        navigate(path.toLowerCase())
    }

    return (
        <li onClick={onSidebarRedirect} className={`relative flex items-center py-2 px-3 my-1 
        rounded-sm cursor-pointer transition-colors
        ${isActive ? "bg-gradient-to-tr from-primary/50 to-primary font-medium"
                : "hover:bg-primary/50"}
        `
        }>
            <span className={`${expanded ? "" : "mx-auto"}`}>
                {icon}
            </span>
            <span className={`overflow-hidden transition-all ${expanded ? 'ml-3' : 'w-0'}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 size-2 rounded ${expanded ? "" : "top-2"} ${isActive ? 'bg-white' : 'bg-primary'}`}></div>
            )}
        </li>
    )
}
