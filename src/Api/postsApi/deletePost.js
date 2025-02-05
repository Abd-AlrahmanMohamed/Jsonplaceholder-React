import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useDeleteData from "../mainApi/useDeleteData";

const deletePost = createAsyncThunk( 'deletePost', async(id) => {
    try {
        const response = await useDeleteData(`/posts/${id}`);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

export default deletePost;