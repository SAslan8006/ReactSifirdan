import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// First, create the thunk
export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        console.log(response.data)
        return response.data;
    }
);

const initialState = {
    user: [],
    loading: 'idle',
    error: null
};

// Then, handle actions in your reducers:
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = 'succeeded';
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message;
            });
    },
});

export default usersSlice.reducer;
