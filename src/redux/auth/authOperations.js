import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (dataForm, { rejectWithValue }) => {
    try {
      const data = await fetch("", { body: dataForm });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (dataForm, { rejectWithValue }) => {
    try {
      const data = await fetch("", { body: dataForm });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
