import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../types/Types'


const initialState: TodoInitialState = {
    todos: [
        {
            id: 1,
            content: 'Todo 1',
            completed: false
        },
        {
            id: 2,
            content: 'Todo 2',
            completed: true
        },
        {
            id: 3,
            content: 'Todo 3',
            completed: false
        }
    ],
}

export const todoSlice=createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state:TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos=[...state.todos, action.payload]
        },
        removeTodoById: (state:TodoInitialState, action: PayloadAction<number>) => {
            state.todos=[...state.todos.filter((todo:TodoType)=>todo.id!==action.payload)]

        }
    }    
})

export const {createTodo,removeTodoById} = todoSlice.actions
export default todoSlice.reducer