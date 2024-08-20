import { getProjectIncidents } from "@/services/incidents/getProjectIncidents.service";
import { useQuery } from "@tanstack/react-query";

const useProjectIncidents = (projectId: string) => {
    const query = useQuery({
        // queryKey: ['projectIncident'],
        queryKey: ['projects', 'incidents', projectId],
        queryFn: async () => {
            if (!projectId) {
                throw new Error('No project id in request')
            }
            return getProjectIncidents(projectId)
        }
    })
    return query;
}

export {useProjectIncidents}