import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./todo.css";
import { TodoForm } from "./TodoForm";
export const Todo=()=>{   
  
    const [task,setTask]=useState([]);
   
   
   
    const handleFormSubmit=(inputValue)=>{
        const{id,content,check}=inputValue;
        if(!content ) return;// validation of empty input

        // if(task.includes(inputValue)) {
        //  
            // return; // validation of duplicate
        // }

        const ifTodoContentMatched=task.find(
            (curTask)=>curTask.content===content
        );
        if(ifTodoContentMatched) return;
        setTask((prevTask)=>[...prevTask,{id,content,check}]);

        // console.log(task); // working

        setInputValue({id:" ",content:" ",check:"false"});  // setting back the input field null

    };

    const handleDeleteTodo=(curTodo)=>{
            // console.log(curTodo);
            const updateTask=task.filter((rishabh)=> rishabh!==curTodo);
            setTask(updateTask);
    };
    const handleCheckedTodo=(curTodo)=>{
        console.log(curTodo);
        const updatedTask=task.map((curTask)=>{
            if(curTask.content===curTodo){
                return {...curTask,check:!curTask.check};
            }else{
                return curTask;
            }
        });
    }

     const handleClearAll=()=>{
            // console.log(task);
            setTask([]);
     };
    return (
        <section className="todo-container">
            <header> 
                <h1> Todo App</h1>
            </header>
            <TodoForm onAddTodo={handleFormSubmit}/>
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask)=>
                            {return (
                            <li key={curTask.id} className="todo-item">
                                <span  className={curTask.check?"checkList":"notCheckList"}> {curTask.content}</span>
                                <button className="check-btn"
                                onClick={()=>handleCheckedTodo(curTask)}>
                                    <MdCheck/>
                                </button>
                                <button className="delete-btn"
                                onClick={()=>handleDeleteTodo(curTask)}
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