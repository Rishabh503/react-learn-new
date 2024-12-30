import { useState } from "react";
import "./todo.css"
import { MdCheck ,MdDeleteForever } from "react-icons/md";
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

        console.log(task); // working

        setInputValue("");  // setting back the input field null

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
                                <button className="delete-btn"> 
                                    <MdDeleteForever/>
                                </button>
                            </li>
                        );
                        })
                    }
                </ul>
            </section>

        </section>
    );
};