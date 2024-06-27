import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/Public.routes";
import Layout from "./components/layouts/MainLayout";
import DashboardPage from "./pages/Dashboard.pages";


const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/*" element={<PublicRoutes/>}/>
      </Route>
      <Route path="/dashboard" element={<DashboardPage/>}/>
    </Routes>
  );
}

export default App;
