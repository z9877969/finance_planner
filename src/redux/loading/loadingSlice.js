import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    startLoader() {
      return true;
    },
    finishLoader() {
      return false;
    },
  },
  extraReducers: (b) => {
    b.addMatcher(
      (action) => action.type.endsWith("/pending"),
      () => true
    ).addMatcher(
      (action) =>
        action.type.endsWith("/fulfilled") || action.type.endsWith("/rejected"),
      () => false
    );
  },
});

export const { startLoader, finishLoader } = loadingSlice.actions;
export default loadingSlice.reducer;
