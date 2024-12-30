import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./todo.css";
export const Todo=()=>{   
    const [inputValue,setInputValue]=useState("");
    const [task,setTask]=useState([]);
    const handleInputChange=(value)=>{
        setInputValue(value);
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();

        if(!inputValue ) return;// validation of empty input

        if(task.includes(inputValue)) {
            setInputValue("");  
            return; // validation of duplicate
        }
        setTask((prevTask)=>[...prevTask,inputValue]);

        // console.log(task); // working

        setInputValue("");  // setting back the input field null

    };

    const handleDeleteTodo=(curTodo)=>{
            // console.log(curTodo);
            const updateTask=task.filter((todo)=> todo!==curTodo);
            setTask(updateTask);
    };

     const handleClearAll=()=>{
            // console.log(task);
            setTask([]);
     };
    return (
        <section className="todo-container">
            <header> 
                <h1> Todo App</h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input 
                        type="text" 
                        className="todo-input" 
                        autoComplete="off"
                        value={inputValue}
                        onChange={
                            (event)=>handleInputChange(event.target.value)
                        }
                        />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">
                            Add task
                        </button>
                    </div>
                </form>
            </section>
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((todo,index)=>
                            {return (
                            <li key={index} className="todo-item">
                                <span> {todo}</span>
                                <button className="check-btn">
                                    <MdCheck/>
                                </button>
                                <button className="delete-btn"
                                onClick={()=>handleDeleteTodo(todo)}
                                > 
                                    <MdDeleteForever/>
                                </button>
                            </li>
                        );
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearAll}>
                    Clear All
                </button>
            </section>

        </section>
    );
};