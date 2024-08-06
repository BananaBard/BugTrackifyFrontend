import { useAuth } from "@/context/AuthContext"
import getUserProjectsService from "@/services/projects/getUserProjects.service";
import { useQuery } from "@tanstack/react-query"

const useProjects = () => {
    const {user} = useAuth();
    const query = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            if (!user) {
                throw new Error('No user in request')
            }
            return getUserProjectsService(user.id)
        }
    })
    return query;
}

export default useProjects;