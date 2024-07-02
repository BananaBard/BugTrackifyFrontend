import { type Project } from '../../types';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { useNavigate } from 'react-router-dom';


interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const navigate = useNavigate();

    const handleOpenProject = () => {
        if (project.id) {
            navigate(`/dashboard/projects/:${project.id}`)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className='flex flex-col items-start gap-2'>
                        <p className="font-medium">{project.leader}</p>
                        <p className="text-sm text-muted-foreground">Project Leader</p>
                    </div>
                    <div className='flex flex-col items-end gap-2'>
                        <Badge variant="secondary" className='w-fit'>{project.status}</Badge>
                        <p className='text-md'><span className='text-sm text-neutral-400'>Start date: </span>{project.startDate}</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <p>Total incidents: {project.totalIncidents}</p>
                <Button onClick={() => handleOpenProject()} variant="outline">
                    View Project
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard