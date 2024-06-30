import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";

interface SidebarContext {
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
    activeItem: string;
    setActiveItem: (item: string) => void;
}

const sidebarContext = createContext<SidebarContext>({expanded: false,setExpanded: () => {}, activeItem: '', setActiveItem: () => {}})

const SidebarProvider = ({children}: PropsWithChildren) => {

    const [expanded, setExpanded] = useState(false);
    const [activeItem, setActiveItem] = useState('');
    return <sidebarContext.Provider value={{expanded, setExpanded, activeItem, setActiveItem}}>
        {children && children}
    </sidebarContext.Provider>
}

export const useSidebar = () => {
    return useContext(sidebarContext)
}

export default SidebarProvider