import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { builder } from "./async";

const initialState = {
    films: [],
    currentFilm: null,
    favorites: [],
    error : null,
    isLoading: false
}

export const filmSlice = createSlice({
    name : 'film',
    initialState,
    reducers: {
        setFavorites : (state, action) => {
            state.favorites = action.payload
        }
    },
    extraReducers : builder
})

export const {setFavorites} = filmSlice.actions
export default filmSlice.reducer