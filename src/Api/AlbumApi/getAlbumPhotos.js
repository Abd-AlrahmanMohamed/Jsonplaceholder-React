import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useGetData from "../mainApi/useGetData";



const getAlbumPhotos = createAsyncThunk ('/spesificAlbum', async (id) => {
    try {
        const response = await useGetData(`/albums/${id}/photos`);
        console.log(response);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

export default getAlbumPhotos;