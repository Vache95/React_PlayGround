import { configureStore } from '@reduxjs/toolkit';
import auth from '@/store/Slices/auth/authSlices';

export const store = configureStore({
    reducer: {auth},
});

export type RootState = ReturnType<typeof store.getState>;