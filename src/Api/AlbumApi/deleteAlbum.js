import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useDeleteData from "../mainApi/useDeleteData";

const deleteAlbum = createAsyncThunk( 'deleteAlbum', async(id) => {
    try {
        const response = await useDeleteData(`/Albums/${id}`);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

export default deleteAlbum;