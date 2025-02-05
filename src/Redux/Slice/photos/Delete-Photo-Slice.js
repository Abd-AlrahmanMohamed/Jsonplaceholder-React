import { createSlice } from "@reduxjs/toolkit";
import deletePhoto from "../../../Api/photosApi/deletePhoto";


const initialState = {
    deletePhoto: [],
    loading: false,
    error: null
};

const deletePhotoSlice = createSlice({
    name: 'deletePhoto',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(deletePhoto.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deletePhoto.fulfilled, (state, action) => {
            state.loading = false;
            state.deletePhoto = action.payload;
        });
        builder.addCase(deletePhoto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const deletePhotoReducer = deletePhotoSlice.reducer;
export default deletePhotoReducer;

