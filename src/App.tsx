import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/Public.routes";
import Layout from "./components/layouts/MainLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";
import PrivateRoutes from "./routes/Private.routes";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/*" element={<PublicRoutes />} />
      </Route>
      <Route element={<DashboardLayout/>}>
        <Route path="/dashboard/*" element={<PrivateRoutes/>}/>
      </Route>
    </Routes>
  );
};

export default App;
