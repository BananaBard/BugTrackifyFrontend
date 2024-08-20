import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const STALE_TIME = 1 * 60 * 1000;

const queryClient = new QueryClient({defaultOptions: {
  queries: {
    staleTime: STALE_TIME
  }
}});

const root = createRoot(document.getElementById("app")!);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Toaster position="top-center" closeButton={true} richColors />
          <App />
          <ReactQueryDevtools initialIsOpen={false}/>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>
);
