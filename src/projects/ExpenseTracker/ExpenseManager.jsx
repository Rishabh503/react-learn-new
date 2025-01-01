
import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { getLocalStorage, setLocalStorage } from "./ExpenseLocalStorage";

export const Expense=()=>{
    const[amount,setAmount]=useState("");
    const[description,setDescription]=useState("");
    const[category,setCategory]=useState("");

    // const reactExpense="reactExpense";
    //setting data from localstorage

    const[expenses,setExpenses]=useState(()=>getLocalStorage());

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        if(!amount || !category) return;
        if(!description) return;
        if(amount&&description){
        addExpense({ description, amount: parseFloat(amount) ,category});
        setDescription('');
              setAmount('');
              setCategory('');
        };
       
    }

    const addExpense=(expense)=>{
        setExpenses([...expenses,expense]);
        // console.log(expenses);
    }
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    //setting the data in local storage
    // localStorage.setItem(reactExpense,JSON.stringify(expenses));
    setLocalStorage(expenses);

    const handleDelete = (exp) => {
        const updatedExpenses = expenses.filter((expense) => expense !== exp);
        setExpenses(updatedExpenses);
      };
      const handleAllClear=()=>{
        setExpenses([]);    
      }
      
    return (
        <section className="todo-container">
            <h1> expense tracker</h1>
            <section>
                <form onSubmit={handleFormSubmit} >
                    <div>
                    <input type="text"
                    autoComplete="off"
                    placeholder="amount"
                    value={amount}
                    onChange={(event)=>setAmount(event.target.value)}>
                    </input>
                    <input type="text"
                    autoComplete="off"
                    placeholder="description"
                    value={description}
                    onChange={(event)=>setDescription(event.target.value)}>
                    </input>
                    <input type="text"
                    autoComplete="off"
                    placeholder="category"
                    value={category}
                    onChange={(event)=>setCategory(event.target.value)}>
                    </input>
                    </div>
                    <div className="click-me-button">
                        <button type="submit">click me</button>
                    </div>
                </form>
            </section>
            <section>
               <ul>
                {expenses.map((expense,index)=>(
                    <li key={index}  className="todo-item"> 
                        <p>{expense.description}--{expense.amount}</p>
                        {expense.category}
                        <button onClick={()=>handleDelete(expense)}>
                                <MdDeleteForever className="delete-btn"/>
                        </button>
                    </li>
                ))}

               </ul>
            </section>
            <section>
                <button className="clear-btn"
                onClick={handleAllClear}>CLEAR ALL</button>
            </section>
            <section className="expenseBox">
                <h2>TOTAL EXPENSES :{total.toFixed(2)}</h2>
            </section>
        </section>
    );
}