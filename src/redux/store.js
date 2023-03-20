import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
import planReducer from "./plan/planSlice";
import cashflowReducer from "./cashflow/cashflowSlice";
import categoriesReducer from "./categories/categoriesSlice";
import loadingReducer from "./loading/loadingSlice";

const authPersistConfig = {
  key: "t",
  storage,
  whitelist: ["token"],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    plan: planReducer,
    cashflow: cashflowReducer,
    categories: categoriesReducer,
    isLoading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
