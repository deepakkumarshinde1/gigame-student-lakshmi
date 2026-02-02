import { createSlice } from "@reduxjs/toolkit";
import { getProduct, getProducts } from "./service/product.service";

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    loading: false,
    error: null,
    products: [],
    product: null,
  },
  reducers: {
    resetProduct(state) {
      state.product = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = "Unable to fetch try again";
      })
      .addCase(getProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.product = null;
        state.error = "Unable to fetch try again";
      });
  },
  //   } {
  //     saveProducts(state, action) {
  //
  //     },
  //   },
});

export default ProductSlice;
export const { resetProduct } = ProductSlice.actions;
