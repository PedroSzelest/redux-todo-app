import React, { useState } from "react";
import "./style components/Input.css"
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/Todo.Action";

const Input = ()=> {
    const [text, setText] = useState("")

    const dispatch = useDispatch()

    const createTodo = e => {
        e.preventDefault()
        dispatch(addTodo(text))
    }

    return (
        <form className="input_container" action="" onSubmit={createTodo}>
            <input type="text" onChange={e => setText(e.target.value)}/>
            <button>create todo</button>
        </form>
    )
}

export default Input