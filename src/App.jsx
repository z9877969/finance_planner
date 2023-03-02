import { Route, Routes } from "react-router-dom";
import Header from "./modules/Header/Header";
import ModalLogin from "./modules/MainPage/ModalLogin";
import ModalRegister from "./modules/MainPage/ModalRegister";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="register" element={<ModalRegister />} />
          <Route path="login" element={<ModalLogin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
