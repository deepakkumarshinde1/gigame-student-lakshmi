import ProductSlice from "./slice/product.slice";
import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slice/service/user.slice";

let store = configureStore({
  reducer: {
    productReducer: ProductSlice.reducer,
    userReducer: UserSlice.reducer,
  },
});

export default store;
