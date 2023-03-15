import { createSlice } from "@reduxjs/toolkit";
import { globalLogout } from "../shared/globalLogout";
import { addPlan, createPrePlan, editPlan, getPlan } from "./planOperations";

const initialState = {
  planData: null,
  accumulationPeriod: {
    month: null,
    year: null,
  },
};

const separatePlanData = (data) => {
  const { month, year, ...rest } = data;
  const {
    salary,
    passiveIncome,
    savings,
    cost,
    footage,
    procent,
    _id: id,
  } = rest;
  const accumulationPeriod = { month, year };
  const planData = {
    salary,
    passiveIncome,
    savings,
    cost,
    footage,
    procent,
    id,
  };

  return { accumulationPeriod, planData };
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPlan.fulfilled, (state, { payload }) => {
        if (!payload) {
          return state;
        }
        const { planData, accumulationPeriod } = separatePlanData(payload);
        state.planData = planData;
        state.accumulationPeriod = accumulationPeriod;
      })
      .addCase(createPrePlan.fulfilled, (state, { payload }) => {
        const { planData, accumulationPeriod } = separatePlanData(payload);
        state.planData = { ...planData, id: state.planData.id };
        state.accumulationPeriod = accumulationPeriod;
      })
      .addCase(addPlan.fulfilled, (state, { payload }) => {
        const { planData, accumulationPeriod } = separatePlanData(payload);
        state.planData = planData;
        state.accumulationPeriod = accumulationPeriod;
      })
      .addCase(editPlan.fulfilled, (state, { payload }) => {
        const { planData, accumulationPeriod } = separatePlanData(payload);
        state.planData = planData;
        state.accumulationPeriod = accumulationPeriod;
      })
      .addMatcher(...globalLogout(initialState));
  },
});

export default planSlice.reducer;
