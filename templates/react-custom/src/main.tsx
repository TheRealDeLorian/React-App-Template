import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { getQueryClient } from './services/queryClient.tsx';
import { QueryClientProvider } from "@tanstack/react-query";
import 'bootstrap/dist/css/bootstrap.min.css';


const queryClient = getQueryClient();

createRoot(document.getElementById('root')!).render(
  <Router>
    <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </StrictMode>
  </Router>
)