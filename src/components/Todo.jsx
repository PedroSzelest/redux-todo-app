import React, { useState } from "react";
import "./style components/Todo.css"
import { useDispatch } from "react-redux";
import { deleteTodo } from "../actions/Todo.Action";

const Todo = ({ text, index })=> {
    const [check, setCheck] = useState(false)
    
    const dispatch = useDispatch()

    return (
        <div className="todo_container">
            <p className={`todo_text ${check}`}>{text}</p>
            <div className="buttons_container">
                <button onClick={()=> setCheck(!check)}>Check</button>
                <button onClick={()=> dispatch(deleteTodo(index))}>Delete</button>
            </div>
        </div>
    )
}

export default Todo