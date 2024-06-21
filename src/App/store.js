import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../fetures/Todo/todoSlics';

export const store = configureStore({
    reducer: todoReducer
})