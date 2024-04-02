import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./slice";

export const store = configureStore({
    reducer: {
        todos: TodoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>