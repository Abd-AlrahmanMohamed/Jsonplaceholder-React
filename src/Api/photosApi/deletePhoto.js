import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useDeleteData from "../mainApi/useDeleteData";

const deletePhoto = createAsyncThunk( 'deletephoto', async(id) => {
    try {
        const response = await useDeleteData(`/photos/${id}`);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

export default deletePhoto;