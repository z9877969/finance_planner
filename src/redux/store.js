import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import loadingReducer from "./loading/loadingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    isLoading: loadingReducer,
  },
});
