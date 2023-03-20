import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoriesOperations";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (_, { payload }) => {
      return payload;
    });
  },
});

export default categoriesSlice.reducer;
