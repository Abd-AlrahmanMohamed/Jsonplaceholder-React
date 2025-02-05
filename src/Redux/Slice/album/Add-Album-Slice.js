import { createSlice } from "@reduxjs/toolkit";
import addAlbum from "../../../Api/AlbumApi/addAlbum";


const initialState = {
    addAlbum: [],
    loading: false,
    error: null
};

const addAlbumSlice = createSlice({
    name: 'addAlbum',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(addAlbum.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(addAlbum.fulfilled, (state, action) => {
            state.loading = false;
            state.addAlbum = action.payload;
        });
        builder.addCase(addAlbum.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const addAlbumReducer = addAlbumSlice.reducer;
export default addAlbumReducer;

