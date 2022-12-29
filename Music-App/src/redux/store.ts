
import { configureStore } from '@reduxjs/toolkit';
import { musicSlice } from './slices/musicSlice';

export const store = configureStore({
    reducer: {
        music: musicSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})