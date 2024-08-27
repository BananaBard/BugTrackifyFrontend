import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
    DialogClose
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteIncidentService } from "@/services/incidents/deleteIncident.service";
import { queryKeys } from "@/lib/utils";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const DeleteIncidentModal = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { projectId: project_id, incidentId } = useParams();

    const deleteIncidentMutation = useMutation({
        mutationFn: deleteIncidentService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.projects.incidentsById(project_id!) })
            navigate(`/dashboard/projects/${project_id}`)
        },
        onError: () => {
            toast.error('Something went wrong', {
                description: 'Could not delete incident ticket'
            })
        }
    })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='destructive' className="w-full">
                    Delete
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[768px] overflow-scroll">
                <DialogHeader>
                    <DialogTitle>Delete Incident Ticket</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    This action can not be undone, are you sure you want to delete this ticket?
                </DialogDescription>
                <div className="flex gap-x-2 justify-end items-center">
                    <DialogClose asChild>
                        <Button variant='secondary'>Cancel</Button>
                    </DialogClose>
                    <Button variant='destructive' onClick={() => deleteIncidentMutation.mutate(incidentId!)}>Delete ticket</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteIncidentModal