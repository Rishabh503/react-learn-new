import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Cards } from './App.jsx'
import './index.css'
// import { Practices } from './practices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practices/> */}
    <Cards/>
  </StrictMode>,
)
