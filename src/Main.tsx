import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";

const root = createRoot(document.getElementById("app")!);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
