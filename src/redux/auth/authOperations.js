import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurUserApi,
  loginUserApi,
  logoutUserApi,
  registerUserApi,
} from "../../utils/api/onrenderApi";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (dataForm, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(dataForm);
      return data; // {name, email, token}
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (dataForm, { rejectWithValue }) => {
    try {
      const token = await loginUserApi(dataForm);
      return token; // token
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurUser = createAsyncThunk(
  "auth/current/user",
  async (_, { getState, rejectWithValue }) => {
    const {
      auth: { token },
    } = getState();
    try {
      const data = await getCurUserApi(token);
      return data; // {name, email, balance}
    } catch (error) {
      return rejectWithValue(error.meassge);
    }
  },
  {
    condition(_, { getState }) {
      const { token } = getState().auth;
      return Boolean(token);
    },
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logoutUserApi();
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
