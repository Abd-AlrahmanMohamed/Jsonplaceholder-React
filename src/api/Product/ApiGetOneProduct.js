import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import useGetData from "../useGetData"



export const getOneProduct = createAsyncThunk('products/getOne', async (id) => {
    try {
        const res = await useGetData(`Product/get-product-by-id?id=${id}`);
        return res.data;
        
    } catch (err) {
        return isRejectedWithValue(err.message);
    }
})

export default getOneProduct