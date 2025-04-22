import { createSlice } from '@reduxjs/toolkit';
// import getAllProducts from '../../api/Product/ApiGetAllProducts';
import getAllPhotos from '../../api/JsonPlaceholderApi/GetPhotosApi';

const initialState = {
  photos: [],
  isLoading: false,
  error: null,  // Add error state if you want to handle errors
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,  // Fixed typo here
  extraReducers: (builder) => {  // Use `builder` to handle async actions
    builder
      .addCase(getAllPhotos.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Optional: Reset error when loading starts
      })
      .addCase(getAllPhotos.fulfilled, (state, action) => {
        state.photos = action.payload || [];
        state.isLoading = false;
      })
      .addCase(getAllPhotos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;  // Optional: Handle error message
      });
  }
});

export const photosReducer = photosSlice.reducer;
export default photosSlice.reducer;
