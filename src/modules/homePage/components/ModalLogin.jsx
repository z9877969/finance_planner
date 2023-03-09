import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal, Form } from "../../../shared/components";
import { loginFormOptions as options } from "../data/formOptions";
import { initialLoginFormValues as initialValues } from "../data/initialFormValues";
import { loginUser } from "../../../redux/auth/authOperations";

const ModalLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (form) => {
    dispatch(loginUser(form));
  };

  return (
    <Modal closeModal={() => navigate("/")}>
      <Form
        options={options}
        initialValue={initialValues}
        btnTitle="Sign In"
        title={"Log in"}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
};

export default ModalLogin;
