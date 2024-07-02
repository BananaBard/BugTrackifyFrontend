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
                <div className="w-1/4">
                    <p>Project leader</p>
                </div>
                <div className="w-3/4">
                    <PreviewIncidentListing incidents={bugs} />
                </div>
            </div>
        </>
    )
}

export default ProjectPage