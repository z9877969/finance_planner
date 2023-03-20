import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const root = document.querySelector("#root");
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
    root.style = "filter: blur(3px)";

    return () => {
      window.removeEventListener("keydown", handleBackdropClick);
      root.style = null;
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
