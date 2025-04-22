import { createSlice } from '@reduxjs/toolkit';
import getOneProduct from '../../api/Product/ApiGetOneProduct';

const initialState = {
  oneProduct: [],
  isLoading: false,
  error: null,  // Add error state if you want to handle errors
};

const oneProductSlice = createSlice({
  name: 'oneProduct',
  initialState,  // Fixed typo here
  extraReducers: (builder) => {  // Use `builder` to handle async actions
    builder
      .addCase(getOneProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Optional: Reset error when loading starts
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.oneProduct = action.payload || [];
        state.isLoading = false;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;  // Optional: Handle error message
      });
  }
});

export const oneProductReducer = oneProductSlice.reducer;
export default oneProductSlice.reducer;