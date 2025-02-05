import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useGetData from "../mainApi/useGetData";



export const getAllPosts = createAsyncThunk ('/getPosts', async () => {
    try {
        const response = await useGetData("/posts");
        console.log(response);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

