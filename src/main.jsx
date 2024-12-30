import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Cards, Events,Hooks } from './App.jsx'
import {Todo} from "./projects/Todo/todo.jsx"
import './index.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practices/> */}
    {/* <Cards/> */}
    {/* <Events/>h */}
    {/* <Hooks/> */}
    <Todo/>
  </StrictMode>
)
