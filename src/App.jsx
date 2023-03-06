import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./modules/Header";
import { ModalLogin, ModalRegister } from "./modules/HomePage";
import { HomePage, OwnPlanPage } from "./pages";
import { PrivateRoute, PublicRoute } from "./shared/containers";

const App = () => {
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
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

// - /plan - рендерить компонент OwnPlanPage
// - /cash-flow - рендерить компонент ExpensesPage
// - /dynamics - рендерить компонент DynamicsPage

export default App;
