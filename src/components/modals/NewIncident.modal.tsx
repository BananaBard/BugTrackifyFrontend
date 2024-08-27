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
import CreateIncidentForm from "../forms/CreateIncidentForm"

const NewIncidentModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='default' className='sm:ml-4 min-[480px]:w-1/4 md:w-auto'>
                    <PlusIcon className="h-4 w-4 mr-2" />
                    New Incident
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[768px] overflow-scroll">
                <DialogHeader>
                    <DialogTitle>Create Incident Ticket</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    This will add a new incident ticket in this project.
                </DialogDescription>
                    <CreateIncidentForm/>
            </DialogContent>
        </Dialog>
    )
}

export default NewIncidentModal