import getErrorMessage from "@/lib/utils"
import { CreateProjectArgs } from "@/types"
import { toast } from "sonner";

const createProjectService = async({title, description, leader}: CreateProjectArgs) => {
    try {
        const res = await fetch('http://localhost:3000/projects/new', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                description: description,
                leader: leader
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
                description: 'You will be redirected to your project',
                duration: 3000
            })
            const project = data.project[0]
            return project;
        }
    } catch(error) {
        console.error(getErrorMessage(error))
        throw new Error(getErrorMessage(error))
    }
}

export default createProjectService;