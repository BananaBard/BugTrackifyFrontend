import { projects, incidentsReports as bugs } from "@/api placeholder/data"
import PreviewIncidentListing from "@/components/listings/PreviewIncidentListing"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "lucide-react"



const ProjectPage = () => {
    const data = projects[0];
    return (
        <>
            <header className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl '>{data.title}</h1>
                <div className="relative ml-auto flex-1 md:grow-0">
                    <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search incidents..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                    />
                </div>
                <Button variant='default' className='ml-4'>
                    <PlusIcon className="h-4 w-4 mr-2" />
                    New Incident
                </Button>
            </header>
            <div className="flex gap-4">
                <div className="w-1/4 flex flex-col gap-2">
                    <div className="w-full border rounded-md py-6 px-4 dark:bg-stone-900">
                        <h3 className="text-xl font-medium">Leader</h3>
                        <p>{data.leader}</p>
                    </div>
                    <div className="w-full border rounded-md py-6 px-4 dark:bg-stone-900">
                        <h4 className="text-xl mb-2 font-medium">Members</h4>

                        <ul>
                            {data.team.map(member => {
                                return <li key={member}>{member}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="w-3/4">
                    <PreviewIncidentListing incidents={bugs} />
                </div>
            </div>
        </>
    )
}

export default ProjectPage