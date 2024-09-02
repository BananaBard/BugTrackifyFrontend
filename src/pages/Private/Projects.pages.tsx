import { Input } from '@/components/ui/input';
import ProjectCard from '@/components/cards/ProjectCard';
import NewProjectDialog from '@/components/modals/NewProject';
import useProjects from '@/hooks/useProjects';


const ProjectsPage = () => {
    const { data: projects, error, isPending } = useProjects();
    return (
        <>
            <header className='flex flex-col sm:flex-row items-start gap-y-2 sm:justify-between sm:items-center mb-4'>
                <h1 className='lg:text-2xl'>Your projects</h1>
                <div className='flex flex-col gap-y-2 w-full sm:w-fit min-[480px]:flex-row min-[480px]:gap-x-2'>
                    <div className="relative w-full  sm:w-auto sm:ml-auto flex-1 md:grow-0">
                        <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search projects..."
                            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                        />
                    </div>
                    <NewProjectDialog />
                </div>
            </header>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4'>
                {
                    isPending && <span>Loading</span>
                }
                {
                    error && <span>{error.message}</span>
                }
                {
                    projects && projects.length > 0 ? (
                        projects.map(p => (
                            <ProjectCard key={p.id} project={p} />
                        ))

                    ) : (
                        <h2>You don't have any projects yet...</h2>
                    )
                }
            </ul>
        </>
    )
}

export default ProjectsPage