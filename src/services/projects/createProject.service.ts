import getErrorMessage from "@/lib/utils"
import { CreateProjectArgs } from "@/types"

const createProjectService = async({title, description, leader}: CreateProjectArgs) => {
    console.log('running project new')
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
        const data = await res.json();
        return data;
    }catch(error) {
        throw new Error(getErrorMessage(error))
    }
}

export default createProjectService;