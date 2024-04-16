import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: localStorage.getItem("shaktiapptodos")? JSON.parse(localStorage.getItem("shaktiapptodos")) : [],
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [action.payload, ...state.todos];
            localStorage.setItem("shaktiapptodos",JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
            localStorage.setItem("shaktiapptodos",JSON.stringify(state.todos));
        },
        updateTodo:(state,action)=>{
            state.todos = state.todos.map(todo=>todo.id === action.payload.id ? action.payload : todo);
            localStorage.setItem("shaktiapptodos",JSON.stringify(state.todos));
        },
        toggleTodo:(state,action)=>{
            state.todos = state.todos.map(todo=>todo.id === action.payload ? {...todo,completed:!todo.completed} : todo);
            localStorage.setItem("shaktiapptodos",JSON.stringify(state.todos));
        }
    },
});

export const { addTodo, removeTodo, updateTodo ,toggleTodo} = todoSlice.actions;
