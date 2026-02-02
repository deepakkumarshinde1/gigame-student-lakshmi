import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/axios.config";

export const getProducts = createAsyncThunk(
  "ProductSlice/getProducts",
  async () => {
    let { data } = await api.get("/products");
    return data;
  }
);

export const getProduct = createAsyncThunk(
  "ProductSlice/getProduct",
  async (id) => {
    let { data } = await api.get("/products/" + id);
    return data;
  }
);

export const addToCart = createAsyncThunk(
  "ProductSlice/addToCart",
  async (newItem) => {
    let { data } = await api.post("/cart", newItem);
    console.log(data);
    return data;
  }
);
