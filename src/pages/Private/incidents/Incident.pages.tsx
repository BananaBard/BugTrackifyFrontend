import PriorityBadgeSelector from "@/components/cards/incidents/PriorityBadgeSelector";
import SeverityBadgeSelector from "@/components/cards/incidents/SeverityBadgeSelector";
import StatusBadgeSelector from "@/components/cards/incidents/StatusBadgeSelector";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Incident } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useProjectIncidents } from "@/hooks/useProjectIncidents";
import { parseTimestamp } from "@/lib/utils";

const IncidentPage = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const {projectId, incidentId} = useParams()
    const {data, isLoading, isError} = useProjectIncidents(projectId!)
    
    if (isLoading) return <h3>Loading</h3>
    if (isError) return <h3>Something went wrong</h3>
    
    const incident : Incident | undefined = data?.find(i => i.id === incidentId)

    if (!incident) return <h3>Could not find incident.</h3>


    return (
        (
            incident && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 max-w-7xl mx-auto">
            <Card>
                <CardHeader className="space-y-4">
                    <CardTitle className="inline-flex items-center gap-2"><Button onClick={() => navigate(-1)} variant='outline'><ArrowLeft/></Button>{incident.title}</CardTitle>
                    <div className="flex flex-col w-full items-start sm:max-lg:max-w-96 xl:flex-row xl:w-fit gap-4 xl:items-center border p-4 rounded">
                        <div className="flex gap-2 items-center justify-between w-full xl:w-fit">
                            <p className="text-sm">Status</p>
                            <StatusBadgeSelector status={incident.status}/>
                        </div>
                        <div className="flex gap-2 items-center justify-between w-full xl:w-fit">
                            <p className="text-sm">Priority</p>
                            <PriorityBadgeSelector priority={incident.priority}/>
                        </div>
                        <div className="flex gap-2 items-center justify-between w-full xl:w-fit">
                            <p className="text-sm">Severity</p>
                            <SeverityBadgeSelector severity={incident.severity}/>
                        </div>
                    </div>  
                    <CardDescription>{incident.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-y-4 w-full justify-between items-center">
                    <div className="flex flex-col items-baseline gap-y-1">
                        <p>Created <span className="font-semibold">{parseTimestamp(incident.created_at)}</span></p>
                        {incident.updated_at ? <p>Updated <span className="font-semibold">{parseTimestamp(incident.updated_at)}</span></p> : ''}
                        <p>By <span className="font-semibold">{incident.created_by.fullname}</span></p>
                        <p>Assigned to <span className="font-semibold">{incident.assigned_to ? incident.assigned_to.fullname : 'Not assigned'}</span></p>
                    </div>
                    <div className="md:w-1/2">
                    {
                        (user && (user?.id == incident.created_by.id)) && 
                        <CardFooter className="flex md:flex-col items-center gap-4 p-0">
                            <Button variant='outline' className="w-full">Edit</Button>
                            <Button variant='destructive' className="w-full">Delete</Button>
                        </CardFooter>
                    }
                    </div>
                </CardContent>
                    
            </Card>

            <Card>
                <CardContent className="space-y-4 pt-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Steps to reproduce</h3>
                        <ol className="list-decimal px-6">
                            {/* {
                                incident.steps_to_reproduce.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))
                            } */}
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
            <Card className="md:col-start-1 md:col-end-3 flex flex-col lg:flex-row lg:justify-between lg:items-center pt-6">
                <CardContent className="h-full">
                    <h3 className="text-xl font-semibold mb-2">Comments</h3>
                {
                    (
                        incident.comments ? (
                            incident.comments.length > 0 ? (
                                <h2>hola</h2>
                            ) : (
                                <h3>This incident has no comments yet.</h3>
                                /* {/* <Skeleton className="w-[100px] h-[20px] rounded-full" /> */
                            )
                        ) : (
                            <h3>This incident has no comments yet.</h3>
                        )
                    )
                }
                </CardContent>
                <CardFooter className="flex flex-col gap-2 items-start lg:w-1/2">
                    <h4>Add a comment</h4>
                    <Textarea/>
                    <Button variant='default' className="w-full mt-2">Comment</Button>
                </CardFooter>
            </Card>
        </div>
            )
        )
    )
}

export default IncidentPage