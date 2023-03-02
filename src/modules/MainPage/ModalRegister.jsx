import { useNavigate } from "react-router-dom";
import Modal from "../../shared/components/Modal/Modal";
import AuthForm from "./AuthForm/AuthForm";

const options = [
  {
    label: "Name",
    type: "text",
    name: "name",
    placeholder: "Enter your name",
  },
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

const initialValues = { name: "", email: "", password: "" };

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
