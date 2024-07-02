import { projects } from '../../api placeholder/data';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import ProjectCard from '@/components/cards/ProjectCard';

const ProjectsPage = () => {

    return (
        <>
            <header className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl '>Your projects</h1>
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
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    projects.map(p => (
                        <ProjectCard key={p.id} project={p}/>
                    ))
                }
            </ul>
        </>
    )
}

export default ProjectsPage