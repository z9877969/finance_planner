// export const selectorIsAuth = (state) => state.auth.isAuth;
export const selectorIsAuth = (state) => Boolean(state.auth.token);
export const selectorUserName = (state) => state.auth.user.name;
export const selectorIsRefreshing = (state) => state.auth.isRefreshing;
export const selectorBalance = (state) => state.auth.user.balance;
export const selectorIsExistBalance = (state) =>
  Boolean(selectorBalance(state));
export const selectorCanRefreshData = (state) => selectorIsAuth(state);
export const selectorIsUserExist = (state) => state.auth.user.email;
