import { useEffect, useRef } from "react";
import "./modal.css";

const Modal = ({ isOpen, setisOpen, children, optionalAnimation }) => {
  const ref = useRef();

  useEffect(() => {
    const closeModal = (e) => {
      if (isOpen && !ref.current.contains(e.target)) {
        setisOpen(false);
      }
    };
    document.addEventListener("click", closeModal);
    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="modal_container">
          <div className="modal_items_wrapper">
            <div className="modal_flex" ref={ref}>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
