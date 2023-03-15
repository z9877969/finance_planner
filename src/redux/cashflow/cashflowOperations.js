import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTransactionApi,
  getCashflowLimitsApi,
} from "../../utils/api/onrenderApi";

export const getCashflowLimits = createAsyncThunk(
  "cashflow/get/limits",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCashflowLimitsApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { token } = getState().auth;
      return Boolean(token);
    },
  }
);

export const addTransaction = createAsyncThunk(
  "cashflow/add/transaction",
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await addTransactionApi(transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// {
//   "totalByMounth": [
//       {
//           "amount": 60000
//       }
//   ],
//   "totalByDay": [
//       {
//           "_id": "2023-03-09",
//           "amount": 60000
//       }
//   ],
//   "monthLimit": 104000,
//   "dailyLimit": 3374.8387096774195
// }
