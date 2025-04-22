import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ApiRegister = createAsyncThunk(
  'register/registerUser',
  async (userData,{ rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:5133/api/Sign/SignIn", 
        userData
    )

      return res.data;
    } catch (err) {
      // Return the error message if any
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export default ApiRegister;
