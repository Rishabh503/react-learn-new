import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Cards, Events } from './App.jsx'
import './index.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practices/> */}
    <Cards/>
    <Events/>h
  </StrictMode>
)
