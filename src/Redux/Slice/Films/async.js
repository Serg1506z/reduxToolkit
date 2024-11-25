import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../../Api";

export const getFilmsThunk = createAsyncThunk('film/getFilms', async (string) => {
    return await Api.getFilms(string)
})

export const getFilmByIdThunk = createAsyncThunk('film/getOneFilm', async (id) => {
    return await Api.getFilmById(id)
})

export const builder = (builder) => {
    builder.addCase(getFilmsThunk.pending, (state) => {
        state.isLoading = true
    }).addCase(getFilmsThunk.rejected, (state, action) => {
        state.error = action.payload
        state.films = []
    }).addCase(getFilmsThunk.fulfilled, (state, action) => {
        state.error = null
        console.log(action.payload);
        if(action.payload.Error){
            state.films = []
        }else {
            state.films = action.payload.Search
        }
    })

    builder.addCase(getFilmByIdThunk.pending, (state) => {
        state.isLoading = true
    }).addCase(getFilmByIdThunk.rejected, (state, action) => {
        state.error = action.payload
        state.currentFilm = null
    }).addCase(getFilmByIdThunk.fulfilled, (state, action) => {
        state.error = null
        state.currentFilm = action.payload
    })
}

