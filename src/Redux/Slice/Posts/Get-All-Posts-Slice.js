import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../../../Api/postsApi/getAllPosts";


const initialState = {
    posts: [],
    loading: false,
    error: null
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(getAllPosts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        });
        builder.addCase(getAllPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const postsReducer = postsSlice.reducer;  
export default postsReducer;

