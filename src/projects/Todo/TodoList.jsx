import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList=(props)=>{
    return (
        
        <li key={props.key} className="todo-item">
            <span> {props.data}</span>
            <button className="check-btn">
                <MdCheck/>
            </button>
            <button className="delete-btn"
            onClick={()=>props.onHandleDeleteTodo(props.todo.data)}
            > 
                <MdDeleteForever/>
            </button>
        </li>
        
    );
};