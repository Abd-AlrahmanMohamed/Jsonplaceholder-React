import { createSlice } from "@reduxjs/toolkit";
import { getAllPhotos } from "../../../Api/photosApi/getAllPhotos";


const initialState = {
    photos: [],
    loading: false,
    error: null
};

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(getAllPhotos.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllPhotos.fulfilled, (state, action) => {
            state.loading = false;
            state.photos = action.payload;
        });
        builder.addCase(getAllPhotos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const photosReducer = photosSlice.reducer;
export default photosReducer;

