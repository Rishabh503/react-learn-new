import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App,Cards} from './App.jsx'
// import { Practices } from './practices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practices/> */}
    <Cards/>
  </StrictMode>,
)
