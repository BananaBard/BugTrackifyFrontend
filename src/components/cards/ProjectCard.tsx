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
            navigate(`/dashboard/projects/${project.id}`)
        }
    }
    return (
        <Card className='flex flex-col'>
            <CardHeader>
                <span className='text-xs text-neutral-400'>{project.id}</span>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className='flex-1 py-0'>
                <div className="flex flex-col gap-y-4 items-start xl:gap-y-0 xl:items-center xl:flex-row justify-between">
                    <div className='flex flex-col items-start gap-2'>
                        <p className="font-medium">{project.leader.fullname}</p>
                        <p className="text-sm text-muted-foreground">Project Leader</p>
                    </div>
                    <div className='flex flex-col items-start xl:items-end gap-2'>
                        <Badge variant="secondary" className='w-fit'>{project.status}</Badge>
                        {project.start_date && <p className='text-md lg:text-right'><span className='text-sm text-neutral-400'>Start date: </span>{project.start_date}</p>}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="py-4 flex flex-col items-start gap-y-2 justify-between lg:items-center mt-auto">
                <p className='text-sm lg:text-base'>Total incidents: {project.incident_count}</p>
                <Button className='lg:w-full' onClick={() => handleOpenProject()} variant="outline">
                    View Project
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard