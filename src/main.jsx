import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Cards, Events,Hooks } from './App.jsx'
import {Todo} from "./projects/Todo/todo.jsx"
import './index.css';
import { Expense } from './projects/ExpenseTracker/ExpenseManager.jsx';
// import bootstrap from 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practices/> */}
    {/* <Cards/> */}
    {/* <Events/>h */}
    {/* <Hooks/> */}
    {/* <Todo/> */}
    <Expense/>
    

  </StrictMode>
)
