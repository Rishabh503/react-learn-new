import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Cards, Events,Hooks } from './App.jsx'
import {Todo} from "./projects/Todo/todo.jsx"
import './index.css';
import { Expense } from './projects/ExpenseTracker/ExpenseManager.jsx';
import { Counter } from './projects/PraticeProjects/counterChallenge.jsx';
import { Form } from './projects/PraticeProjects/RegistrationForm.jsx';
import { Login } from './projects/PraticeProjects/Login.jsx';
import { ReactUseEffect } from './components/hooks/useEffect/index.jsx';
import { Challenge } from './components/hooks/useEffect/useEffectChallange.jsx';
import { HowNot } from './components/hooks/useEffect/hownotofetchapi.jsx';
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
      {/* <Expense/> */}
    {/* <Counter/> */}
    {/* <Form/> */}
    {/* <Login/> */}
    {/* <ReactUseEffect/> */}
    {/* <Challenge/> */}
    <HowNot/>

  </StrictMode>
)
