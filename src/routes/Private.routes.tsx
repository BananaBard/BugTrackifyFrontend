import { useAuth } from "@/context/AuthContext"
import DashboardPage from "@/pages/Private/Dashboard.pages"
import IncidentPage from "@/pages/Private/incidents/Incident.pages"
import ProjectPage from "@/pages/Private/Project.pages"
import ProjectsPage from "@/pages/Private/Projects.pages"
import StatisticsPage from "@/pages/Private/Statistics.pages"
import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"

const PrivateRoutes = () => {
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    },[])

    return (
        <Routes>
            <Route path="/" element={<DashboardPage/>}/>
            <Route path="/statistics" element={<StatisticsPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/projects/:projectId" element={<ProjectPage/>}/>
            <Route path='/projects/:projectId/:incidentId' element={<IncidentPage/>}/>
            <Route path="/incidents" element={<h1>Hola</h1>}/>
            <Route path="/settings" element={<h1>Hola</h1>}/>
        </Routes>
    )
}

export default PrivateRoutes