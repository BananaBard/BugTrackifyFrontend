import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { PlusIcon } from "lucide-react"
import CreateProjectForm from "../forms/CreateProjectForm"

const NewProjectDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='default' className='sm:ml-4 min-[480px]:w-1/4 md:w-auto'>
                    <PlusIcon className="h-4 w-4 mr-2" />
                    New Project
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Project</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    This will create an empty project!
                </DialogDescription>
                    <CreateProjectForm/>
            </DialogContent>
        </Dialog>
    )
}

export default NewProjectDialog