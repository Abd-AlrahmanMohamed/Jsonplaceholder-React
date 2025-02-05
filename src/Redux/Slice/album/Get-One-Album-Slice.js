import { createSlice } from "@reduxjs/toolkit";
import getAlbum from "../../../Api/AlbumApi/getOneAlbum";


const initialState = {
    oneAlbum: [],
    loading: false,
    error: null
};

const getOneAlbumSlice = createSlice({
    name: 'oneAlbum',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(getAlbum.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAlbum.fulfilled, (state, action) => {
            state.loading = false;
            state.oneAlbum = action.payload;
        });
        builder.addCase(getAlbum.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const getOneAlbumReducer = getOneAlbumSlice.reducer;
export default getOneAlbumReducer;

