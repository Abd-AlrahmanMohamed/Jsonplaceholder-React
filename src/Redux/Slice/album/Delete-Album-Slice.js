import { createSlice } from "@reduxjs/toolkit";
import deleteAlbum from "../../../Api/AlbumApi/deleteAlbum";


const initialState = {
    deleteAlbum: [],
    loading: false,
    error: null
};

const deleteAlbumSlice = createSlice({
    name: 'deleteAlbum',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(deleteAlbum.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteAlbum.fulfilled, (state, action) => {
            state.loading = false;
            state.deleteAlbum = action.payload;
        });
        builder.addCase(deleteAlbum.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const deleteAlbumReducer = deleteAlbumSlice.reducer;
export default deleteAlbumReducer;

