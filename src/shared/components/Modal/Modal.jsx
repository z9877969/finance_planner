import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, closeModal }) => {
  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget || e.code === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleBackdropClick);

    return () => {
      window.removeEventListener("keydown", handleBackdropClick);
    };
  }, [handleBackdropClick]);

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;
