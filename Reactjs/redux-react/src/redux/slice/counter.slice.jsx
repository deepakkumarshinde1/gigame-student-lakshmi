import { createSlice } from "@reduxjs/toolkit";

let CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state, action) {
      state.count += 1;
    },
  },
});

export default CounterSlice;
export const { increment } = CounterSlice.actions;
