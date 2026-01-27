import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slice/counter.slice";
import TodoSlice from "./slice/todo.slice";

let store = configureStore({
  reducer: {
    counterSlice: CounterSlice.reducer,
    todoSlice: TodoSlice.reducer,
  },
});

export default store;
