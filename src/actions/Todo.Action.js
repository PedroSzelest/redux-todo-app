import types from "../types/types";

export const addTodo = payload => {
    return {
        type: types.ADD_TODO,
        payload
    }
}

export const deleteTodo = payload => {
    return {
        type: types.DELETE_TODO,
        payload
    }
}
