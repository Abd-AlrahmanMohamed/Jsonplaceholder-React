import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import useGetData from "../useGetData"



export const getAllPhotos = createAsyncThunk('photos/getall', async () => {
    try {
        const res = await useGetData("photos");
        return res.data;
        
    } catch (err) {
        return isRejectedWithValue(err.message);
    }
})

export default getAllPhotos
