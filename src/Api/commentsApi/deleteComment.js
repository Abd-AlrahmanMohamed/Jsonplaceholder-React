import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import useDeleteData from "../mainApi/useDeleteData";

const deleteComment = createAsyncThunk( 'deleteComment', async(id) => {
    try {
        const response = await useDeleteData(`/comments/${id}`);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

export default deleteComment;