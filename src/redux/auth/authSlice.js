import { createSlice } from "@reduxjs/toolkit";
import {
  getCurUser,
  loginUser,
  logoutUser,
  registerUser,
} from "./authOperations";

const initialState = {
  isAuth: true,
  user: {
    name: "Bart",
    email: null,
    balance: 0,
  },
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (build) => {
    build
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = { ...payload };
        state.isAuth = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.token = payload;
        state.isAuth = true;
      })
      .addCase(logoutUser.fulfilled, () => initialState)
      .addCase(getCurUser.fulfilled, (state, { payload }) => {
        state.user = { ...payload };
      });
  },
});

export default authSlice.reducer;
