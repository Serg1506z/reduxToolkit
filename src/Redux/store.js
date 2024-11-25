import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./Slice/Films";

export const store = configureStore({
    reducer: {
        film: filmSlice
    }
})