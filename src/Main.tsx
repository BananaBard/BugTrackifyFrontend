import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";
import {Toaster} from 'sonner';


const root = createRoot(document.getElementById("app")!);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <Toaster position="top-center" closeButton={true} richColors/>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
