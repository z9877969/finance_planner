import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "modules/header";
import { ModalLogin, ModalRegister } from "modules/homePage";
import {
  CashFlowPage,
  HomePage,
  OwnPlanPage,
  DynamicsPage,
  StatisticsPage,
} from "pages";
import { PrivateRoute, PublicRoute } from "shared/containers";
import { getCurUser } from "redux/auth/authOperations";

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
          path="/statistics/*"
          element={<PrivateRoute component={<StatisticsPage />} />}
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
