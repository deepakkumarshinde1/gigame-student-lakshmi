import { createSlice } from "@reduxjs/toolkit";
import { getTodoList } from "../services/todo.services";
const TodoSlice = createSlice({
  name: "TodoSlice",
  initialState: {
    newTodo: "",
    list: [],
  },
  reducers: {
    handelInput(state, action) {
      state.newTodo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodoList.pending, (state, action) => {})
      .addCase(getTodoList.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(getTodoList.rejected, (state, action) => {
        alert("fail to fetch data");
      });
  },
});

export default TodoSlice;
export const { handelInput } = TodoSlice.actions;
