import { createSlice } from "@reduxjs/toolkit";
import deletePost from "../../../Api/postsApi/deletePost";


const initialState = {
    deletePost: [],
    loading: false,
    error: null
};

const deletePostSlice = createSlice({
    name: 'deletePost',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(deletePost.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deletePost.fulfilled, (state, action) => {
            state.loading = false;
            state.deletePost = action.payload;
        });
        builder.addCase(deletePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const deletePostReducer = deletePostSlice.reducer;
export default deletePostReducer;

