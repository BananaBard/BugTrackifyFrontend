import { useLocation } from "react-router-dom";

const useHistory = (): string[] => {
    const {pathname} =  useLocation()
    const history = pathname.trim().split('/').filter(i => i != "");

    return history
}

export default useHistory