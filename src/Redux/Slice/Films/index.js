import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { builder } from "./async";

const initialState = {
    films: [],
    currentFilm: null,
    error : null,
    isLoading: false
}

export const filmSlice = createSlice({
    name : 'film',
    initialState,
    reducers: {
        
    },
    extraReducers : builder
})

export const {} = filmSlice.actions
export default filmSlice.reducer