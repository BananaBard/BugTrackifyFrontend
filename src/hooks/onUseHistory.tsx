import { useLocation } from "react-router-dom";

const useHistory = (): string[] => {
    const {pathname} =  useLocation()
    const history = pathname.trim().split('/').filter(i => i != "");

   /*  if (history.length > 3) {
        history.pop()
        history[2] = cleanPath(history[2])
    }
     */
    return history
}

/* const cleanPath = (path: string): string => {
    let cleanedPath = path;

    if (cleanedPath.endsWith(':')) {
        cleanedPath = cleanedPath.slice(0, -1);
    }
    if (cleanedPath.startsWith(':')) {
        cleanedPath = cleanedPath.slice(1);
    }

    return decodeURIComponent(cleanedPath)
} */

export default useHistory