import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./modules/header";
import { ModalLogin, ModalRegister } from "./modules/homePage";
import { CashFlowPage, HomePage, OwnPlanPage, DynamicsPage } from "./pages";
import { PrivateRoute, PublicRoute } from "./shared/containers";
import { getCurUser } from "./redux/auth/authOperations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PublicRoute component={<HomePage />} />}>
          <Route path="register" element={<ModalRegister />} />
          <Route path="login" element={<ModalLogin />} />
        </Route>
        <Route
          path="/plan"
          element={<PrivateRoute component={<OwnPlanPage />} />}
        />
        <Route
          path="/cash-flow"
          element={<PrivateRoute component={<CashFlowPage />} />}
        />
        <Route
          path="/dynamics"
          element={<PrivateRoute component={<DynamicsPage />} />}
        />
        <Route
          path="/statistics"
          element={<PrivateRoute component={<DynamicsPage />} />}
        >
          <Route path="transactions" element={<h1>TransactionsList</h1>} />
          <Route path="categories" element={<h1>CategoriesList</h1>} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default App;
