import { createSlice } from "@reduxjs/toolkit";
import getOnePost from "../../../Api/postsApi/getOnePost";


const initialState = {
    post: [],
    loading: false,
    error: null
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(getOnePost.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getOnePost.fulfilled, (state, action) => {
            state.loading = false;
            state.post = action.payload;
        });
        builder.addCase(getOnePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const postReducer = postSlice.reducer; 
export default postReducer;

