import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/axios.config";

export const createUser = createAsyncThunk(
  "UserSlice/createUser",
  async (newUser) => {
    let { data } = await api.post("/auth/register", newUser);
    if (data.id) {
      return true;
    } else {
      return false;
    }
  }
);

export const loginUser = createAsyncThunk(
  "UserSlice/loginUser",
  async (login) => {
    let { data } = await api.post("/auth/login", login);
    return data;
  }
);
