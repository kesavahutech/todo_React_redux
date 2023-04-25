import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name : "todo",
    initialState : {
        todos : []
    },
    reducers: {
        addtodo(state, action) {
            state.todos.push(action.payload)
        },
        deletetodo(state, action){
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updatetodo(state,action){
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload){
                    todo.striked = true
                    return todo
                }
                return todo
            }) 
        }
    }

})

export const todoActions = todoSlice.actions

export default todoSlice.reducer;