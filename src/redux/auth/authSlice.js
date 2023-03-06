import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: true,
    user: {
      name: "Bart"
    }
  },
});

export default authSlice.reducer;
