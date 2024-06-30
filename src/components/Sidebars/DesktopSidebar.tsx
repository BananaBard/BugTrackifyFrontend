import { PropsWithChildren } from "react"
import { Button } from "../ui/button"
import { ArrowLeftIcon, MenuIcon, } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { useSidebar } from "@/context/SidebarContext"

export const DesktopSidebar = ({ children }: PropsWithChildren) => {
    const {expanded, setExpanded} = useSidebar();

    return (
        <aside className="h-screen">
            <nav className={`px-4 py-6 pb-2 h-full flex flex-col border-r dark:border-neutral-500 shadow-sm shadow-neutral-200 ${expanded ? 'w-60' : 'w-24 items-center'}`}>
                <div className="flex gap-2 items-center justify-between mb-4">
                    <h2 className={`overflow-hidden transition-all ${expanded ? 'block' : 'hidden'}`}>🐞 BugTrackify</h2>
                    <Button onClick={() => setExpanded(!expanded)} variant='outline'>
                        {expanded ? <ArrowLeftIcon /> : <MenuIcon />}
                    </Button>
                </div>
                    <ul className="flex-1">
                        {children}
                    </ul>
                <div className={`border-t dark:border-neutral-500 flex p-3 items-center gap-4 overflow-hidden transition-all ${expanded ? "w-52" : "w-16"}`}>
                    <Avatar>
                        <AvatarImage className="rounded-full size-10" src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback className="bg-neutral-300 p-2 rounded-full">UN</AvatarFallback>
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

