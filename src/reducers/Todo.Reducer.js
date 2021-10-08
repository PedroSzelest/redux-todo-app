import types from "../types/types";

const default_state = {
    todo_list: [],
    index: null
}

const todoReducer = (state = default_state, action)=> {
    switch (action.type) {
        case types.ADD_TODO: 
            return {
                ...state,
                todo_list: [...state.todo_list, action.payload]
            }
        
        case types.DELETE_TODO: 
            return {
                ...state,
                todo_list: state.todo_list.filter((todo, i)=> i !== action.payload )
            }

        default:
            return state
    }
}

export default todoReducer