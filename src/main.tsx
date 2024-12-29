import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
//import  CandidateSearch  from './pages/CandidateSearch.tsx'
//import  SavedCandidates  from './pages/SavedCanidates.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
