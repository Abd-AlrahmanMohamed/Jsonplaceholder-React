import { createSlice } from "@reduxjs/toolkit";
import getPhoto from "../../../Api/photosApi/getOnePhoto";


const initialState = {
    photo: [],
    loading: false,
    error: null
};

const photoSlice = createSlice({
    name: 'photo',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(getPhoto.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getPhoto.fulfilled, (state, action) => {
            state.loading = false;
            state.photo = action.payload;
        });
        builder.addCase(getPhoto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const photoReducer = photoSlice.reducer; 
export default photoReducer;

