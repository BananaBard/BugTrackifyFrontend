import getErrorMessage, { baseUrl } from "@/lib/utils"
import { toast } from "sonner";

const deleteIncidentService = async (incidentId: string) => {
    try {
        const res = await fetch(`${baseUrl}incidents/${incidentId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        });

        if (!res.ok) {
            toast.error('Something went wrong', {
                description: 'Could not delete ticket',
                duration: 3000
            })
            return
        }
    } catch(error) {
        throw new Error(getErrorMessage(error))
    }
}

export {deleteIncidentService}