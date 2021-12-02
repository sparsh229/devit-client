import { configureStore } from '@reduxjs/toolkit';
import auth from './authSlice';
import activate from './activateSlice';
import user from './userSlice';
export const store = configureStore({
    reducer: {
        auth,
        activate,
        user,
    },
});
