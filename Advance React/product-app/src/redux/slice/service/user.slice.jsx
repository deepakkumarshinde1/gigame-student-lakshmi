import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./user.service";
import { setCookies } from "../../../config/authCookies";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    user: null,
    newUserAdd: false,
    error: null,
  },
  reducers: {
    resetNewUser(state) {
      state.newUserAdd = false;
    },
    addAuth(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, () => {})
      .addCase(createUser.fulfilled, (state, action) => {
        if (action.payload) state.newUserAdd = true;
        else state.error = "Unable to registered, please try again";
      })
      .addCase(createUser.rejected, (state) => {
        state.error = "Unable to registered, please try again";
      })
      .addCase(loginUser.pending, () => {})
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        setCookies(action.payload.token);
      })
      .addCase(loginUser.rejected, (state) => {
        state.error = "Unable to login, please try again";
      });
  },
});

export default UserSlice;
export const { resetNewUser, addAuth } = UserSlice.actions;
