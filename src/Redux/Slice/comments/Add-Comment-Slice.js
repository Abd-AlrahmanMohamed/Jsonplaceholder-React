import { createSlice } from "@reduxjs/toolkit";
import addComment from "../../../Api/commentsApi/addComment";


const initialState = {
    addComment: [],
    loading: false,
    error: null
};

const addCommentSlice = createSlice({
    name: 'addComment',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(addComment.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(addComment.fulfilled, (state, action) => {
            state.loading = false;
            state.addComment = action.payload;
        });
        builder.addCase(addComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const addCommentReducer = addCommentSlice.reducer; 

export default addCommentReducer;