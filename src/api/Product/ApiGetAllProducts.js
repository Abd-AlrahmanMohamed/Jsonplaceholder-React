import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import useGetData from "../useGetData"



export const getAllProducts = createAsyncThunk('products/getall', async () => {
    try {
        const res = await useGetData("Product/get-all-products");
        return res.data;
        
    } catch (err) {
        return isRejectedWithValue(err.message);
    }
})

export default getAllProducts