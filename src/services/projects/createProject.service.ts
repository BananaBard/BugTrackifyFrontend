import getErrorMessage, { baseUrl } from "@/lib/utils"
import { CreateProjectArgs, Project } from "@/types"
import { toast } from "sonner";

const createProjectService = async({title, description, leader, status}: CreateProjectArgs) => {
    try {
        const res = await fetch(`${baseUrl}projects/new`, {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                description: description,
                leader: leader,
                status: status
            }),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })
        if (!res.ok) {
            toast.error('Something went wrong', {
                description: 'Could not create your project',
                duration: 3000
            })
            return;
        } else {
            const data = await res.json();
            toast.success('Project created', {
                duration: 3000
            })
            const project = data.project[0]
            return project as Project;
        }
    } catch(error) {
        throw new Error(getErrorMessage(error))
    }
}

export default createProjectService;