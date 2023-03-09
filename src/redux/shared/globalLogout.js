import { logoutUser } from "../auth/authOperations";
import { logOut } from "../auth/authSlice";

const checkAction = ({ type }) =>
  type === logoutUser.fulfilled.toString() || type === logOut.toString();
const resetState = (initialState) => initialState;

export const globalLogout = (initialState) => [
  checkAction,
  () => resetState(initialState),
];
