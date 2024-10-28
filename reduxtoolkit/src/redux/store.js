import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counter/counterSlice'
import usersReducer from '../redux/counter/userSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
    },
})