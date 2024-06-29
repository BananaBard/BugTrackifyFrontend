import DashboardPage from "@/pages/Private/Dashboard.pages"
import ProjectsPage from "@/pages/Private/Projects.pages"
import StatisticsPage from "@/pages/Private/Statistics.pages"
import { Route, Routes } from "react-router-dom"

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage/>}/>
            <Route path="/statistics" element={<StatisticsPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/incidents" element={<h1>Hola</h1>}/>
            <Route path="/settings" element={<h1>Hola</h1>}/>
        </Routes>
    )
}

export default PrivateRoutes