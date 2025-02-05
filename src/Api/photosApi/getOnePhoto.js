import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useGetData from "../mainApi/useGetData";

const getPhoto = createAsyncThunk ('/spesificPhoto', async (id) => {
    try {
        const response = await useGetData(`/photos/${id}`);
        console.log(response);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

export default getPhoto;