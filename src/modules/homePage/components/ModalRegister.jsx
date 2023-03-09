import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal, Form } from "../../../shared/components";
import { registerFormOptions as options } from "../data/formOptions";
import { initialRegisterFormValues as initialValues } from "../data/initialFormValues";
import { registerUser } from "../../../redux/auth/authOperations";

const ModalRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (form) => {
    dispatch(registerUser(form));
  };

  return (
    <Modal closeModal={() => navigate("/")}>
      <Form
        options={options}
        initialValue={initialValues}
        btnTitle="Sign Up"
        title={"Registration"}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
};

export default ModalRegister;
