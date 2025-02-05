import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { useAddDataWithImage } from "../mainApi/useAddData";

const addPhoto = createAsyncThunk ('/addPhoto', async (data) => {
    try {
        const response = await useAddDataWithImage("/photos", data);
        console.log(response);
        return  response;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
})

export default addPhoto;