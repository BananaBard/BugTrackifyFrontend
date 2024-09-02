import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import UpdateIncidentForm from "../forms/UpdateIncidentForm"

const UpdateIncidentModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='secondary' className="w-full">
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[768px] overflow-scroll">
                <DialogHeader>
                    <DialogTitle>Update Incident Ticket</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    This will update the filled fields on this ticket.
                </DialogDescription>
                    <UpdateIncidentForm/>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateIncidentModal