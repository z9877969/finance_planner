import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBaseBalance } from "redux/auth/authOperations";
import { selectorBalance } from "redux/auth/authSelectors";
import { Modal } from "shared/components";

const ModalAddBalance = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(0);
  const newBalance = useSelector(selectorBalance);
  const isLoading = useSelector((state) => state.isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBaseBalance(Number(balance)));
  };

  useEffect(() => {
    newBalance && closeModal();
  }, [newBalance, closeModal]);

  return (
    !isLoading && (
      <Modal closeModal={closeModal}>
        <form onSubmit={handleSubmit}>
          <p style={{ color: "#fff", fontSize: "30px" }}>Add balance:</p>
          <input
            type="text"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
        </form>
      </Modal>
    )
  );
};

export default ModalAddBalance;
