import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useGetData from "../mainApi/useGetData";



const getAlbum = createAsyncThunk ('/spesificAlbum', async (id) => {
    try {
        const response = await useGetData(`/Albums/${id}`);
        console.log(response);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

export default getAlbum;