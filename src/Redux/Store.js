import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../Slice/Products/GetProductsSlice";
import { registerReducer } from "../Slice/Admin/register-slice";
import { AddProductReducer } from "../Slice/Products/AddProductSlice";
import AddCartReducer from "../Slice/cart/AddCartSlice";
import { oneProductReducer } from "../Slice/Products/GetOneProductSlice";
import { photosReducer } from "../Slice/JsonPlaceholderSlice/GetAllPhotosSlice";

// Create the Redux store using configureStore
const store = configureStore({
  reducer: {
    productsData: productsReducer,
    registerData: registerReducer,
    addProductData: AddProductReducer,
    addCartData: AddCartReducer,
    onProductData: oneProductReducer,
    photosData: photosReducer,
  },
  devTools: true
});

export default store;
