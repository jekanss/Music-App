
import { configureStore } from '@reduxjs/toolkit';
import { musicSlice } from './slices/musicSlice';
import { uiSlice } from './slices/uiSlice';

export const store = configureStore({

    reducer: {
        music: musicSlice.reducer,
        ui: uiSlice.reducer
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})