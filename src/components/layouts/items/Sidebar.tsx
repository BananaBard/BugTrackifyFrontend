import { PropsWithChildren, ReactNode, createContext, useContext, useState } from "react"
import { Button } from "../../ui/button"
import { ArrowLeftIcon, MenuIcon, } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

const SidebarContext = createContext(false)

export const Sidebar = ({ children }: PropsWithChildren) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <aside className="h-screen">
            <nav className={`p-4 pb-2 h-full flex flex-col border-r dark:border-neutral-500 shadow-sm shadow-neutral-200 ${expanded ? 'w-60' : 'w-24'}`}>
                <div className="flex gap-2 items-center justify-between mb-4">
                    <h2 className={`overflow-hidden transition-all ${expanded ? 'block' : 'hidden'}`}>🐞 BugTrackify</h2>
                    <Button onClick={() => setExpanded(!expanded)} variant='outline'>
                        {expanded ? <ArrowLeftIcon /> : <MenuIcon />}
                    </Button>
                </div>
                <SidebarContext.Provider value={expanded}>
                    <ul className="flex-1">
                        {children}
                    </ul>
                </SidebarContext.Provider>
                <div className={`border-t dark:border-neutral-500 flex p-3 items-center gap-4 overflow-hidden transition-all ${expanded ? "w-52" : "w-16"}`}>
                    <Avatar>
                        <AvatarImage className="rounded-full size-10" src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <div className={`leading-5 ${expanded ? 'block' : 'hidden'}`}>
                        <p className="font-semibold">Bruno Gonzalez</p>
                        <p className="text-gray-400">Developer</p>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

interface SidebarItemProps {
    icon: ReactNode;
    text: string;
    active?: boolean;
    alert?: boolean;
}

export const SidebarItem = ({ icon, text, active, alert }: SidebarItemProps) => {
    const expanded = useContext(SidebarContext);

    return (
        <li className={`relative flex items-center py-2 px-3 my-1 
        rounded-sm cursor-pointer transition-colors
        ${active ? "bg-gradient-to-tr from-primary/50 to-primary font-medium"
                : "hover:bg-primary/50"}
        `
        }>
            <span className={`${expanded ? "" : "mx-auto"}`}>
            {icon}
            </span>
            <span className={`overflow-hidden transition-all ${expanded ? 'ml-3' : 'w-0'}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 size-2 rounded bg-primary ${expanded ? "" : "top-2"}`}></div>
            )}
        </li>
    )
}
