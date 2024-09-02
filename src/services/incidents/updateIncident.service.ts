import getErrorMessage, { baseUrl } from "@/lib/utils"
import { Incident } from "@/types"
import { toast } from "sonner";

interface UpdateIncidentArgs {
    incident_id: string;
    fieldsToUpdate: Partial<Incident>
}

const updateIncidentservice = async({incident_id, fieldsToUpdate}: UpdateIncidentArgs) => {
    try {
        const res = await fetch(`${baseUrl}incidents/update`, {
            method: 'PUT',
            body: JSON.stringify({
                incident_id,
                fieldsToUpdate
            }),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })
        if (!res.ok) {
            toast.error('Something went wrong', {
                description: 'Could not edit incident ticket',
                duration: 3000
            })
            return;
        } else {
            const data = await res.json();
            toast.success('Incident ticket edited', {
                duration: 3000
            })
            return data.message
        }
    } catch(error) {
        throw new Error(getErrorMessage(error))
    }
}

export default updateIncidentservice