import { useNavigate } from "react-router-dom";
import Modal from "../../shared/components/Modal/Modal";
import AuthForm from "./AuthForm/AuthForm";

const options = [
  {
    label: "Email",
    type: "text",
    name: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    type: "text",
    name: "password",
    placeholder: "Enter your password",
  },
];

const initialValues = { email: "", password: "" };

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
