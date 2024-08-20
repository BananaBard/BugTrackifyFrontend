import PreviewIncidentListing from "@/components/listings/PreviewIncidentListing"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useProjectIncidents } from "@/hooks/useProjectIncidents"
import useProjects from "@/hooks/useProjects"
import { PlusIcon } from "lucide-react"
import { useMemo } from "react"
import { useParams } from "react-router-dom"

const team = [
    {
      fullname: "Alice Johnson", role: 'Project Leader'
    },
    {
      fullname: "Bob Smith", role: 'Developer'
    },
    {
      fullname: "Charlie Brown", role: 'Tester'
    },
    {
      fullname: "Juan Arias", role: 'Developer'
    },
    {
      fullname: "Roberto Sanchez", role: 'Tester'
    },
  ]

const ProjectPage = () => {
    const {projectId} = useParams();
    const {data: projects} = useProjects();
    const data = useMemo(() => projects?.find(p => p.id == projectId),[projects, projectId])
    const {data: bugs, error, isLoading} = useProjectIncidents(projectId!)

    const testers =  team.filter(member => member.role === 'Tester') /* data?.team ? data.team.filter(member => member.role === 'Tester') : null; */
    const developers = team.filter(member => member.role === 'Developer') /* data?.team ? data.team.filter(member => member.role === 'Developer') : null; */

    return (
            data && (
                <>
            <header className='flex flex-col sm:flex-row items-start gap-y-2 sm:justify-between sm:items-center mb-4'>
                <h1 className='lg:text-2xl'>{data.title}</h1>
                <div className='flex flex-col gap-y-2 w-full sm:w-fit min-[480px]:flex-row min-[480px]:gap-x-2'>
                    <div className="relative w-full  sm:w-auto sm:ml-auto flex-1 md:grow-0">
                        <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search incidents..."
                            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                        />
                    </div>
                    <Button variant='default' className='sm:ml-4 min-[480px]:w-1/4 md:w-auto'>
                        <PlusIcon className="h-4 w-4 mr-2" />
                        New Incident
                    </Button>
                </div>
            </header>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full flex flex-col min-[480px]:flex-row md:w-1/4 lg:w-1/6 md:flex-col gap-2">
                    <div className="w-full border rounded-md p-4 dark:bg-stone-900">
                        <h3 className="text-xl font-medium">Leader</h3>
                        <p>{data.leader.fullname}</p>
                    </div>
                    <div className="w-full border rounded-md py-6 px-4 dark:bg-stone-900 max-h-64 min-[480px]:max-h-48 md:max-h-64 overflow-y-scroll">
                        <h3 className="text-xl font-medium">Members</h3>
                        <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-16 sm:items-start md:flex-col md:items-start">
                            <div className="flex flex-col">
                                <h4 className="underline text-lg">Testers</h4>
                                <ul>
                                    {testers?.map((member, index) => {
                                        return <li key={index} className="sm:text-md">{member.fullname}</li>
                                    })}
                                </ul>
                            </div>

                            <div className="lg:mt-2 flex flex-col">
                                <h4 className="underline text-lg">Developers</h4>
                                <ul>
                                    {developers?.map((member, index) => {
                                        return <li key={index} className="sm:text-md">{member.fullname}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-3/4 lg:w-5/6 ">
                    {
                        isLoading && <h2>Loading</h2>
                    }

                    {
                        error && <h2>{error.message}</h2>
                    }

                    {
                        bugs ? (
                            <PreviewIncidentListing incidents={bugs} />
                        ) : (
                            <h2>This project does not have any incidents yet.</h2>
                        )
                    }
                </div>
            </div>
        </>
            )
    )
}

export default ProjectPage

/* const MyForm = () => {
    const queryClient = useQueryClient();
    const paramId = 'b166418f-42fa-4594-8d14-2bab8cfce25f'
    useProjectIncidents(paramId);
    useProjectIncidents('5a2de5b4-b6d0-4e73-8acb-3453132bc5e5');

    const createIncidentMutation = useMutation({
        mutationFn: async () => ({ updatedProjectId: paramId }),

        onSuccess: ({updatedProjectId}) => {
            queryClient.invalidateQueries({queryKey: queryKeys.projects.incidentsById(updatedProjectId) })
        }
    });

} */