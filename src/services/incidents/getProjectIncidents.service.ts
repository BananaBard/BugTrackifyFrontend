import getErrorMessage, { baseUrl } from "@/lib/utils"
import { Incident } from "@/types";
import { toast } from "sonner";

const getProjectIncidents = async (projectId: string) => {
    try {
        const res = await fetch(`${baseUrl}incidents/byProject/${projectId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        });

        if (!res.ok) {
            toast.error('Something went wrong', {
                description: 'Could not get projects incidents',
                duration: 3000
            })
            return;
        } else {
            const data = await res.json();
            return data.incidents as Incident[];
        }
    } catch(error) {
        throw new Error(getErrorMessage(error))
    }
}

export {getProjectIncidents}