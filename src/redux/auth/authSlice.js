import { createSlice } from "@reduxjs/toolkit";
import { addTransaction } from "../cashflow/cashflowOperations";
import {
  addBaseBalance,
  getCurUser,
  loginUser,
  logoutUser,
  registerUser,
} from "./authOperations";

const initialState = {
  isAuth: false,
  user: {
    name: "",
    email: null,
    balance: 0,
  },
  token: null,
  isRefreshing: true,
};

// _id:"6414a325fdd6215c62719378"
// email:"dunkan@mail.com"
// name:"Dunkan"
// token(

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut() {
      return { ...initialState };
    },
    resetIsRefreshing(state) {
      state.isRefreshing = false;
    },
    setBalance(state, { payload }) {
      state.user.balance = payload;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { token, ...user } = payload.token;
        state.user = user;
        state.token = token;
        state.isAuth = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { token, ...user } = payload;
        state.token = token;
        state.user = user;
        state.isAuth = true;
      })
      .addCase(getCurUser.fulfilled, (state, { payload }) => {
        state.user = { ...payload };
        state.isAuth = true;
        state.isRefreshing = false;
      })
      .addCase(getCurUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logoutUser.fulfilled, () => ({
        ...initialState,
        isRefreshing: false,
      }))
      .addCase(logoutUser.rejected, () => ({
        ...initialState,
        isRefreshing: false,
      }))
      .addCase(addBaseBalance.fulfilled, (state, { payload }) => {
        state.user.balance = payload;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.user.balance = payload.newBalance;
      });
  },
});

export const { logOut, resetIsRefreshing, setBalance } = authSlice.actions;
export default authSlice.reducer;
