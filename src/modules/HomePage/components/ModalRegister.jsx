import { useNavigate } from "react-router-dom";
import Modal from "../../../shared/components/Modal/Modal";
import AuthForm from "./AuthForm/AuthForm";
import { registerFormOptions as options } from "../data/formOptions";
import { initialRegisterFormValues as initialValues } from "../data/initialFormValues";

const ModalRegister = () => {
  const navigate = useNavigate();

  return (
    <Modal closeModal={() => navigate("/")}>
      <AuthForm
        options={options}
        initialValue={initialValues}
        btnTitle="Sign Up"
        title={"Registration"}
        onSubmit={(data) => console.log(data)}
      />
    </Modal>
  );
};

export default ModalRegister;
