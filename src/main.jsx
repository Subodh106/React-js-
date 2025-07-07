import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import newApp from './App.jsx' // Importing newApp for demonstration

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App /> 

  </StrictMode>,
)
