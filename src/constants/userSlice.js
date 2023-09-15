// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        registerSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        registerFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { registerStart, registerSuccess, registerFailure } = userSlice.actions;
export default userSlice.reducer;
