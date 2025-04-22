import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { useAddData } from "../useAddData";

// Async thunk to handle the product addition
const ApiAddCart = createAsyncThunk(
  "cart/addcart",
  async (data) => {
    try {
      const res = await useAddData("Cart/add-cart", data);

      console.log(res);

      return res.data;
    } catch (err) {
      return isRejectedWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export default ApiAddCart;
