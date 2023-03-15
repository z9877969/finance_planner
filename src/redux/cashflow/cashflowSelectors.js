import { selectorBalance } from "../auth/authSelectors";

export const selectorCashflowLimits = (state) => {
    const balance = selectorBalance(state);
  const { monthLimit, dailyLimit, totalByMounth, totalByDay } = state.cashflow;
  const newMonthlimit = balance - totalByDay
//   (monthLimit - totalByMounth) / days - totalByDay
};

// monthLimit, 100000
// dailyLimit, 3000
// totalByMounth, 15000 -> 14500
// totalByDay 0 -> 500

