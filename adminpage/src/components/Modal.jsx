import { useEffect, useRef } from "react";
import "./css/modal.css";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ isOpen, setisOpen, children, optionalAnimation }) => {
  const ref = useRef();
  let visible, hidden;
  if (optionalAnimation) {
    visible = optionalAnimation.visible;
    hidden = optionalAnimation.hidden;
  }
  console.log(visible, hidden);
  useEffect(() => {
    console.log(ref);
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

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: hidden ? hidden.y : 0,
      x: hidden ? hidden.x : 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: visible ? visible.y : 0,
      x: visible ? visible.x : 0,
      transition: {
        duration: 0.3,
      },
    },

    exit: {
      opacity: 0,
      scale: 0.5,
      y: hidden ? hidden.y : 0,
      x: hidden ? hidden.x : 0,
      transition: {
        duration: 0.4,
      },
    },
    exitcontainer: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal_container"
          exit="exitcontainer"
          variants={variants}
        >
          <div className="modal_items_wrapper">
            <motion.div
              className="modal_flex"
              ref={ref}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
