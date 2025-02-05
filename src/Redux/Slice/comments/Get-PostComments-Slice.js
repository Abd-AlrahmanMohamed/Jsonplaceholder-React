import { createSlice } from "@reduxjs/toolkit";
import { getPostComments } from "../../../Api/commentsApi/getPostComments";


const initialState = {
    postComments: [],
    loading: false,
    error: null
};

const postCommentsSlice = createSlice({
    name: 'postComments',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(getPostComments.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getPostComments.fulfilled, (state, action) => {
            state.loading = false;
            state.postComments = action.payload;
        });
        builder.addCase(getPostComments.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const postCommentsReducer = postCommentsSlice.reducer; 
export default postCommentsReducer;

