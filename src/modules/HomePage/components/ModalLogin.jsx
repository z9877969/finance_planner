import { useNavigate } from "react-router-dom";
import Modal from "../../../shared/components/Modal/Modal";
import AuthForm from "./AuthForm/AuthForm";
import { loginFormOptions as options } from "../data/formOptions";
import { initialLoginFormValues as initialValues } from "../data/initialFormValues";

const ModalLogin = () => {
  const navigate = useNavigate();

  return (
    <Modal closeModal={() => navigate("/")}>
      <AuthForm
        options={options}
        initialValue={initialValues}
        btnTitle="Sign In"
        title={"Log in"}
        onSubmit={(data) => console.log(data)}
      />
    </Modal>
  );
};

export default ModalLogin;
