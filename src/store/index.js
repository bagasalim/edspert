import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/slice";
import productReducer from "./product/slice";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
