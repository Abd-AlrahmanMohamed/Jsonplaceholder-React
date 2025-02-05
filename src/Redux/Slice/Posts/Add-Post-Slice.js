import { createSlice } from "@reduxjs/toolkit";
import addPost from "../../../Api/postsApi/addPost";
// import { getOnePost } from "../../../Api/postsApi/getOnePost";


const initialState = {
    addPost: [],
    loading: false,
    error: null
};

const addPostSlice = createSlice({
    name: 'addPost',
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(addPost.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(addPost.fulfilled, (state, action) => {
            state.loading = false;
            state.addPost = action.payload;
        });
        builder.addCase(addPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const addPostReducer = addPostSlice.reducer;

export default addPostReducer;

