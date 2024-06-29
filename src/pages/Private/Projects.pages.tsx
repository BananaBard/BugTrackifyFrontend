import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '../../api placeholder/data';
import DashboardBreadcrum from '@/components/DashboardBreadcrum';
import useHistory from '@/hooks/onUseHistory';

const ProjectsPage = () => {
    const history = useHistory();

    return (
        <main className='p-8 w-full h-screen bg-neutral-100 dark:bg-neutral-800'>
            <DashboardBreadcrum history={history}/>
            <h1 className='text-2xl mb-4'>Your projects</h1>
            <ul className='flex flex-col gap-y-4'>
                {
                    projects.map(p => (
                        <Card key={p.projectId} className='max-w-xl relative'>
                            <CardHeader>
                                <CardTitle>{p.name}</CardTitle>
                                <CardDescription>{p.description}</CardDescription>
                            </CardHeader>
                            <CardContent className='flex gap-4 items-center justify-between'>
                                <p>{p.status}</p>
                                <p className='absolute top-6 right-4'>{p.startDate}</p>
                                <p>Members: {p.team.length}</p>
                                <p>Leader: {p.leader}</p>
                            </CardContent>
                        </Card>

                    ))
                }
            </ul>
        </main>
    )
}

export default ProjectsPage