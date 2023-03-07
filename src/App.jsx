import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./modules/header";
import { ModalLogin, ModalRegister } from "./modules/homePage";
import { CashFlowPage, HomePage, OwnPlanPage, DynamicsPage } from "./pages";
import { getCurUser } from "./redux/auth/authOperations";
import { PrivateRoute, PublicRoute } from "./shared/containers";

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
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default App;
