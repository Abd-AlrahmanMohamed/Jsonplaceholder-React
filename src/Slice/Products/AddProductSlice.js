import { createSlice } from '@reduxjs/toolkit';
import ApiAddProduct from '../../api/Product/ApiAddProduct';

const initialState = {
  addProduct: null,  // If the expected response is an object, initialize with null
  isLoading: false,
  error: null,  // Keep track of errors
};

const addProductSlice = createSlice({
  name: 'addProduct',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(ApiAddProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Reset error when loading starts
      })
      .addCase(ApiAddProduct.fulfilled, (state, action) => {
        // Assuming response should be an object, not an array.
        state.addProduct = action.payload || null;  // Use null as default if payload is empty
        state.isLoading = false;
      })
      .addCase(ApiAddProduct.rejected, (state, action) => {
        state.isLoading = false;
        // Safely check for action.error.message
        state.error = action.error?.message || 'An error occurred';  // Fallback if no message
      });
  }, 
});

export const AddProductReducer = addProductSlice.reducer;  // Only export this
export default AddProductReducer; // This is the default export
