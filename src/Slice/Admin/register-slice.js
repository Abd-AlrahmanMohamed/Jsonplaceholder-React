import { createSlice } from '@reduxjs/toolkit';
import ApiRegister from '../../api/Admin/Api-Register';


const initialState = {
    register: [],
    isLoading: false,
    error: null,  // Add error state if you want to handle errors
  };

const RegisterSlice = createSlice({
    name: 'register',
      initialState,  // Fixed typo here
      extraReducers: (builder) => {  // Use `builder` to handle async actions
        builder
          .addCase(ApiRegister.pending, (state) => {
            state.isLoading = true;
            state.error = null;  // Optional: Reset error when loading starts
          })
          .addCase(ApiRegister.fulfilled, (state, action) => {
            state.register = action.payload || [];
            state.isLoading = false;
          })
          .addCase(ApiRegister.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;  // Optional: Handle error message
          });
      }
})

export const registerReducer = RegisterSlice.reducer;
export default RegisterSlice.reducer;
