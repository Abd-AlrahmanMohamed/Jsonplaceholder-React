import { createSlice } from "@reduxjs/toolkit";
import getAllAlbums from "../../../Api/AlbumApi/getAlbums";


const initialState = {
    getAlbums: [],
    loading: false,
    error: null
};

const getAlbumsSlice = createSlice({
    name: 'getAlbums',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(getAllAlbums.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllAlbums.fulfilled, (state, action) => {
            state.loading = false;
            state.getAlbums = action.payload;
        });
        builder.addCase(getAllAlbums.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const getAlbumsReducer = getAlbumsSlice.reducer;
export default getAlbumsReducer;

