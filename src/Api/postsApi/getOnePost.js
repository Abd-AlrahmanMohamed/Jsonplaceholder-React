import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useGetData from "../mainApi/useGetData";



const getOnePost = createAsyncThunk ('/spesificPost', async (id) => {
    try {
        const response = await useGetData(`/posts/${id}`);
        console.log(response);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

export default getOnePost;