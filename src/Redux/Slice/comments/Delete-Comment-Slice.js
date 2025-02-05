import { createSlice } from "@reduxjs/toolkit";
import deleteComment from "../../../Api/commentsApi/deleteComment";


const initialState = {
    deleteComment: [],
    loading: false,
    error: null
};

const deleteCommentSlice = createSlice({
    name: 'deleteComment',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(deleteComment.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteComment.fulfilled, (state, action) => {
            state.loading = false;
            state.deleteComment = action.payload;
        });
        builder.addCase(deleteComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const deleteCommentReducer = deleteCommentSlice.reducer;
export default deleteCommentReducer;

