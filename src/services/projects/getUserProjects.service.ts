import getErrorMessage, { baseUrl } from "@/lib/utils"
import { Project } from "@/types";
import { toast } from "sonner";

const getUserProjectsService = async(userId: string) => {
    try {
        const res = await fetch(`${baseUrl}projects/getByUserId/${userId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        });

        if (!res.ok) {
            toast.error('Something went wrong', {
                description: 'Could not get projects',
                duration: 3000
            })
            return;
        } else {
            const data = await res.json();
            return data.projects as Project[];
        }
    } catch(error) {
        throw new Error(getErrorMessage(error))
    }
}

export default getUserProjectsService;