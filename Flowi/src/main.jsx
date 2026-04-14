import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from './sidebarM.jsx'
import Dashboard from "./pages/Dashboard.jsx"
import Workflow from "./workflow.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Sidebar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workflows" element={<Workflow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
