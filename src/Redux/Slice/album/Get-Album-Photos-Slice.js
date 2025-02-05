import { createSlice } from "@reduxjs/toolkit";
import getAlbumPhotos from "../../../Api/AlbumApi/getAlbumPhotos";


const initialState = {
    photos: [],
    loading: false,
    error: null
};

const getAlbumPhotosSlice = createSlice({
    name: 'photos',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(getAlbumPhotos.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAlbumPhotos.fulfilled, (state, action) => {
            state.loading = false;
            state.photos = action.payload;
        });
        builder.addCase(getAlbumPhotos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const getAlbumPhotosReducer = getAlbumPhotosSlice.reducer;
export default getAlbumPhotosReducer;

