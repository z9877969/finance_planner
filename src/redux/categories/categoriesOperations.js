import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesApi } from "../../utils/api/onrenderApi";

export const getCategories = createAsyncThunk(
  "categories/get",
  async (_, { rejectWithValue }) => {
    try {
      const categories = await getCategoriesApi();
      return categories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { auth, categories } = getState();
      return Boolean(auth.token) && categories.length === 0;
    },
  }
);
