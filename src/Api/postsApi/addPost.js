import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { useAddData } from "../mainApi/useAddData";

const addPost = createAsyncThunk ('addPost', async (data) => {
    try {
        const response = await useAddData("/posts", data);
        console.log(response);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

export default addPost;