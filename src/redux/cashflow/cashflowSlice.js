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
        state.monthLimit = monthLimit;
        state.dailyLimit = dailyLimit;
        state.totalByDay = totalByDay;
        state.totalByMounth = totalByMounth;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        const { sum, type } = payload;
        if (type === "expense") {
          state.totalByDay += sum;
          // state.totalByMounth -= sum;
        } else if (type === "income") {
          return state;
        }
      })
      .addCase(...globalLogout(initialState));
  },
});

export default cashflowSlice.reducer;
// sum(pin):80
// type(pin):"expense"
// category(pin):"car"
// owner(pin):"64073a564dbe6cdb40622984"
// newBalance(pin):810
