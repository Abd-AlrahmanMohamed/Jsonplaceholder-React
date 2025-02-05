import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import useGetData from '../mainApi/useGetData';

const getAllAlbums = createAsyncThunk( 'getAlbums', async() => {
    try {
        const response = await useGetData(`/Albums`);
        console.log(response);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

export default getAllAlbums;