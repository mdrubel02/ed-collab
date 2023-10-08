import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalFeatures/modalSlice";


export const store = configureStore({
    reducer: {
        modals: modalSlice,
    },
})