import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import useGetData from '../mainApi/useGetData';

export const getPostComments = createAsyncThunk( 'spesificPostComments', async(id) => {
    try {
        const response = await useGetData(`/posts/${id}/comments`);
        console.log(response);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})



