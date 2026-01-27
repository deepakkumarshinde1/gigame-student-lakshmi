import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let getTodoList = createAsyncThunk(
  "TodoSlice/getTodoList",
  async (payload) => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    return data;
  },
);
