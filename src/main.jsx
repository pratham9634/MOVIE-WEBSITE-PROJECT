import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchProvider } from './contexts/SearchContext'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </SearchProvider>
);  
