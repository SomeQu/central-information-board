import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./apiSllice"; 
import authReducer from './features/auth/authSlice'
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})
export type RootState = ReturnType<typeof store.getState>;