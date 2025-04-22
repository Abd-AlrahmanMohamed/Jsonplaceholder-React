import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { useAddDataWithImage } from "../useAddData";

const ApiAddProduct = createAsyncThunk(
  "product/addproduct",
  async (data) => {
    try {
      const res = await useAddDataWithImage("Product/add-product",data
      );
      return res.data;  // Return the data from the response
    } catch (err) {
      // If there's an error, reject with the error message or response data
      return isRejectedWithValue(
        err.response ? err.response.data : err.message
      );
    }
  }
);

export default ApiAddProduct;
