import { createSelector } from "@reduxjs/toolkit";

export const selectorTotalByDay = (state) => state.cashflow.totalByDay;
export const selectorDailyLimit = (state) => state.cashflow.dailyLimit;
export const selectorMonthlyLimit = (state) => state.cashflow.monthLimit;

// export const selectorCashflowLimits = createSelector(
//   [selectorBalance, selectorTotalByDay],
//   (balance, totalByDay) => {
//     setNewDateWithBalance(balance);
//     const savedBalance = getBalanceFromLS();
//     const curDate = new Date();

//     const nextMonth = new Date(curDate.getFullYear(), curDate.getMonth() + 1);
//     const lastMonthDate = new Date(
//       curDate.getFullYear(),
//       nextMonth.getMonth(),
//       0
//     );

//     const daysDiff = lastMonthDate.getDate() - curDate.getDate() + 1;
//     const newMonthlimit = savedBalance;
//     const newTotalByDay = newMonthlimit / daysDiff - totalByDay;

//     return { dailyLimit: Math.round(newTotalByDay), monthLimit: savedBalance };
//   }
// );
export const selectorCashflowLimits = createSelector(
  [selectorTotalByDay, selectorDailyLimit, selectorMonthlyLimit],
  (totalByDay, dailyLimit, monthLimit) => {
    return { dailyLimit: dailyLimit - totalByDay, monthLimit };
  }
);
