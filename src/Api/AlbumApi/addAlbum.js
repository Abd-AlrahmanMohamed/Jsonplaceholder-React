import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { useAddData } from "../mainApi/useAddData";

 const addAlbum = createAsyncThunk ('addAlbum', async (data) => {
    try {
        const response = await useAddData("/Albums", data);
        console.log(response);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

export default addAlbum;