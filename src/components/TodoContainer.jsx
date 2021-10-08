import React from "react";
import Todo from "./Todo";
import "./style components/TodoContainer.css"
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";


const TodoContainer = ()=> {
    const { todo_list } = useSelector( state => state.todoReducer)

    return (
        <div className="main_todo_container">
            {todo_list.map((text, index) => (
                <Todo 
                key={uuidv4()}
                text={text}
                index={index}
                />
            ))}
        </div>
    )
}

export default TodoContainer