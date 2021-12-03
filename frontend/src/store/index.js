import { createSlice, configureStore } from '@reduxjs/toolkit';

const authInitialState = { isLoggedIn: false, email: 'null', password: null };

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.email = null;
            state.password = null;
        },
    },
});

const store = configureStore({
    reducer: { authentication: authSlice.reducer },
});

export const authActions = authSlice.actions;
export default store;
