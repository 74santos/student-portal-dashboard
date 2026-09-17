import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom"
import { ToastProvider } from "./context/ToastContext"
import './index.css'
import App from './App.tsx'
import { NotificationProvider } from './context/NotificationContext.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
    <ToastProvider>
   
      <AppProvider>

        <NotificationProvider>
          <App />
        </NotificationProvider>
        
      </AppProvider>
     
    </ToastProvider>
  </BrowserRouter>
</StrictMode>
);
