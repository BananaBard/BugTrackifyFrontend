import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/Public.routes";
import Layout from "./components/layouts/MainLayout";


const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/*" element={<PublicRoutes/>}/>
      </Route>
    </Routes>
  );
}

export default App;
