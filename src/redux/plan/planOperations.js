import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPlanApi,
  createPrePlanApi,
  editPlanApi,
  getPlanApi,
} from "../../utils/api/onrenderApi";

const getIsObjectEnpty = (obj) => !Object.keys(obj).length;

export const getPlan = createAsyncThunk(
  "plan/get",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getPlanApi();
      return getIsObjectEnpty(data) ? null : data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { planData } = getState().plan;
      return !planData;
    },
  }
);

export const createPrePlan = createAsyncThunk(
  "plan/createPre",
  async (prePlanData, { rejectWithValue }) => {
    try {
      const data = await createPrePlanApi(prePlanData);
      console.log("pre_data", data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPlan = createAsyncThunk(
  "plan/addPlan",
  async (planData, { rejectWithValue }) => {
    try {
      const data = await addPlanApi(planData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editPlan = createAsyncThunk(
  "plan/editPlan",
  async (planData, { rejectWithValue }) => {
    try {
      const data = await editPlanApi(planData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
