import { createSlice } from "@reduxjs/toolkit";
import { addTransaction, getCashflowLimits } from "./cashflowOperations";
import { globalLogout } from "../shared/globalLogout";

const initialState = {
  monthLimit: 0,
  dailyLimit: 0,
  totalByMounth: 0,
  totalByDay: 0,
};

const cashflowSlice = createSlice({
  name: "cashflow",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCashflowLimits.fulfilled, (state, { payload }) => {
        const { monthLimit, dailyLimit, totalByDay, totalByMounth } = payload;
        state.monthLimit = Math.round(monthLimit);
        state.dailyLimit = Math.round(dailyLimit);
        state.totalByDay = totalByDay;
        state.totalByMounth = totalByMounth;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        const { sum, type } = payload;
        if (type === "expense") {
          state.dailyLimit -= sum;
        } else if (type === "income") {
          return state;
        }
      })
      .addCase(...globalLogout(initialState));
  },
});

export default cashflowSlice.reducer;