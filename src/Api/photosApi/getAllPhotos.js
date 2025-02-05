import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import useGetData from '../mainApi/useGetData';

// export const getAlbumPhotos = createAsyncThunk( 'getAlbumphotos', async(id) => {
//     try {
//         const response = await useGetData(`/Albums/${id}/photos`);
//         console.log(response);
//         return  response;
//     } catch (error) {
//         return isRejectedWithValue(error.message);
//     }
// })

export const getAllPhotos = createAsyncThunk( 'getphotos', async() => {
    try {
        const response = await useGetData(`/photos`);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})