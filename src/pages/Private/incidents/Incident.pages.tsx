import PriorityBadgeSelector from "@/components/cards/incidents/PriorityBadgeSelector";
import SeverityBadgeSelector from "@/components/cards/incidents/SeverityBadgeSelector";
import StatusBadgeSelector from "@/components/cards/incidents/StatusBadgeSelector";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Incident } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const incident: Incident = {
    id: "1",
    title: "Error when saving changes in user profile",
    project: "User Management System",
    created_at: "2024-06-01",
    assigned_to: {id: 'asasd', fullname: "Juan Pérez"},
    created_by: {id: '812cb03f-f3b5-42fc-b45d-c89229c84924', fullname: "Ana García"},
    updated_at: "2024-20-08",
    status: 'closed',
    priority: 'high',
    severity: 'critical',
    description: "When trying to save changes in the user profile, an error message is displayed and changes are not saved.",
    steps_to_reproduce: [
      "Log in to the application.",
      "Go to the profile page.",
      "Modify any profile field.",
      "Click on 'Save changes'."
    ],
    actual_result: "An error message stating 'Changes could not be saved' appears.",
    expected_result: "Profile changes should be saved successfully, and a confirmation message should appear.",
    comments: [
      
    ]
  }

const IncidentPage = () => {
    const {user} = useAuth();
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6">
            <Card>
                <CardHeader className="space-y-4">
                    <CardTitle>{incident.title}</CardTitle>
                    <div className="flex flex-col w-full items-start lg:flex-row lg:w-fit gap-4 lg:items-center border p-4 rounded">
                        <div className="flex gap-2 items-center justify-between w-full lg:w-fit">
                            <p className="text-sm">Status</p>
                            <StatusBadgeSelector status={incident.status}/>
                        </div>
                        <div className="flex gap-2 items-center justify-between w-full lg:w-fit">
                            <p className="text-sm">Priority</p>
                            <PriorityBadgeSelector priority={incident.priority}/>
                        </div>
                        <div className="flex gap-2 items-center justify-between w-full lg:w-fit">
                            <p className="text-sm">Severity</p>
                            <SeverityBadgeSelector severity={incident.severity}/>
                        </div>
                    </div>  
                    <CardDescription>{incident.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-start">
                    <p>Created <span>{incident.created_at}</span></p>
                    <p>Updated <span>{incident.updated_at}</span></p>
                    <p>By <span>{incident.created_by.fullname}</span></p>
                    <p>Assigned to <span>{incident.assigned_to ? incident.assigned_to.fullname : 'Not assigned'}</span></p>
                </CardContent>
                    {
                        (user && (user?.id == incident.created_by.id)) && 
                        <CardFooter className="flex justify-end gap-4">
                            <Button variant='outline' className="w-full">Edit</Button>
                            <Button variant='destructive' className="w-full">Delete</Button>
                        </CardFooter>
                    }
            </Card>

            <Card>
                <CardContent className="space-y-4 pt-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Steps to reproduce</h3>
                        <ol className="list-decimal px-6">
                            {
                                incident.steps_to_reproduce.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))
                            }
                        </ol>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Actual result</h3>
                        <p>{incident.actual_result}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Expected result</h3>
                        <p>{incident.expected_result}</p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Comments
                    </CardTitle>
                </CardHeader>
                <CardContent>
                {
                    incident.comments.length > 0 ? (
                        <h2>hola</h2>
                    ) : (
                        <h3>This incident has no comments yet.</h3>
                        /* {/* <Skeleton className="w-[100px] h-[20px] rounded-full" /> */
                    )
                }
                </CardContent>
                <CardFooter className="flex flex-col gap-2 items-start">
                    <h4>Add a comment</h4>
                    <Textarea/>
                    <Button variant='default' className="w-full mt-2">Comment</Button>
                </CardFooter>
            </Card>
        </div>

    )
}

export default IncidentPage