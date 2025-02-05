import { createSlice } from "@reduxjs/toolkit";
import addPhoto from "../../../Api/photosApi/addPhoto";


const initialState = {
    addPhoto: [],
    loading: false,
    error: null
};

const addPhotoSlice = createSlice({
    name: 'addPhoto',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(addPhoto.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(addPhoto.fulfilled, (state, action) => {
            state.loading = false;
            state.addPhoto = action.payload;
        });
        builder.addCase(addPhoto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const addPhotoReducer = addPhotoSlice.reducer; 
export default addPhotoReducer;

