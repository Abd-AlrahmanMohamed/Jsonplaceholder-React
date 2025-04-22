import { createSlice } from '@reduxjs/toolkit';
import getAllProducts from '../../api/Product/ApiGetAllProducts';

const initialState = {
  products: [],
  isLoading: false,
  error: null,  // Add error state if you want to handle errors
};

const productsSlice = createSlice({
  name: 'products',
  initialState,  // Fixed typo here
  extraReducers: (builder) => {  // Use `builder` to handle async actions
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Optional: Reset error when loading starts
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload || [];
        state.isLoading = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;  // Optional: Handle error message
      });
  }
});

export const productsReducer = productsSlice.reducer;
export default productsSlice.reducer;
