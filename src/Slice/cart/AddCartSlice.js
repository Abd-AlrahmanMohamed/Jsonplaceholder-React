import { createSlice } from '@reduxjs/toolkit';
import ApiAddCart from '../../api/Product/ApiAddCart';

const initialState = {
  addCart: null,  // If the expected response is an object, initialize with null
  isLoading: false,
  error: null,  // Keep track of errors
};

const addCartSlice = createSlice({
  name: 'addCart',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(ApiAddCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Reset error when loading starts
      })
      .addCase(ApiAddCart.fulfilled, (state, action) => {
        // Assuming response should be an object, not an array.
        state.addCart = action.payload || null;  // Use null as default if payload is empty
        state.isLoading = false;
      })
      .addCase(ApiAddCart.rejected, (state, action) => {
        state.isLoading = false;
        // Safely check for action.error.message
        state.error = action.error?.message || 'An error occurred';  // Fallback if no message
      });
  }, 
});

export const AddCartReducer = addCartSlice.reducer;  // Only export this
export default AddCartReducer;