import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { useAddData } from "../mainApi/useAddData";

const addComment = createAsyncThunk ('addComment', async (data) => {
    try {
        const response = await useAddData("/comments", data);
        console.log(response);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

export default addComment;