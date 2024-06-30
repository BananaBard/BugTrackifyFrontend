import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '../../api placeholder/data';
import DashboardBreadcrum from '@/components/DashboardBreadcrum';
import useHistory from '@/hooks/onUseHistory';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import ProjectCard from '@/components/cards/ProjectCard';

const ProjectsPage = () => {
    const history = useHistory();

    return (
        <main className='px-6 py-20 sm:p-8 w-full h-screen bg-neutral-100 dark:bg-neutral-800'>
            <header className='flex justify-between items-center'>
                <DashboardBreadcrum history={history} />
                <div className="relative ml-auto flex-1 md:grow-0">
                    <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search projects..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                    />
                </div>
                <Button variant='default' className='ml-4'>
                    <PlusIcon className="h-4 w-4 mr-2" />
                    New Project
                </Button>
            </header>
            <h1 className='text-2xl mb-4'>Your projects</h1>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    projects.map(p => (
                        <ProjectCard key={p.projectId}/>
                    ))
                }
            </ul>
        </main>
    )
}

export default ProjectsPage