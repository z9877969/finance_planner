import axios from "axios";

axios.defaults.baseURL = "https://flat-back.onrender.com/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const path = {
  REGISTER: "/user/register",
  LOGIN: "/user/login",
  LOGOUT: "/user/logout",
  CUR_USER: "/user/info",
  BALANCE: "/user/addBalance",
  PLAN_PRE: "/personal-plan/pre",
  PLAN: "/personal-plan",
};

export const registerUserApi = async (userData) => {
  try {
    const { data } = await axios.post(path.REGISTER, userData);
    const { name, ...rest } = userData;
    const token = await loginUserApi(rest);
    return { ...data, token };
  } catch (error) {
    throw error;
  }
};

export const loginUserApi = async (credentials) => {
  try {
    const { data } = await axios.post(path.LOGIN, credentials);
    token.set(data.token);
    const userData = await getCurUserApi(data.token);
    return { ...userData, token: data.token };
  } catch (error) {
    throw error;
  }
};

export const logoutUserApi = () => {
  return axios.get(path.LOGOUT).then((res) => {
    token.unset();
    return null;
  });
};

export const getCurUserApi = async (userToken) => {
  token.set(userToken);
  try {
    const { data } = await axios.get(path.CUR_USER);
    return data;
  } catch (error) {
    throw error;
  }
};

export const addBaseBalanceApi = async (balance) => {
  try {
    const { data } = await axios.put(path.BALANCE, { balance });
    return data;
  } catch (error) {
    throw error;
  }
};

export const createPrePlanApi = async (prePlanData) => {
  try {
    const { data } = await axios.post(path.PLAN_PRE, prePlanData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const addPlanApi = async (planData) => {
  try {
    const { data } = await axios.post(path.PLAN, planData);
    return data.newBalance;
  } catch (error) {
    throw error;
  }
};

export const getPlanApi = async () => {
  try {
    const { data } = await axios.get(path.PLAN);
    return data;
  } catch (error) {
    throw error;
  }
};

export const editPlanApi = async (newPlanData) => {
  try {
    const { data } = await axios.put(path.PLAN, newPlanData);
    return data;
  } catch (error) {
    throw error;
  }
};
