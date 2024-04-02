import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";

const initialState: Todo[] = []

const slice = createSlice({
    name: 'TodoSlice',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>){
            const newTodo: Todo = { id: Date.now(), text: action.payload };
            state.push(newTodo)
        },
        deleteTodo(state, action: PayloadAction<number>){
            return state.filter((todo) => todo.id !== action.payload);
        },
    }
})

export const { addTodo, deleteTodo } = slice.actions
export const TodoReducer = slice.reducer