import React from "react";
import "./confirmation.css";

const Confirmation = ({
  handleDeleteChoice,
  setisdeleteBlogActivate,
  name,
}) => {
  const deleteOptions = (choice) => {
    if (choice === "yes") {
      setisdeleteBlogActivate(true);
    } else {
      setisdeleteBlogActivate(false);
      handleDeleteChoice(false);
    }
  };
  return (
    <div className="confirmation--wrapper">
      <div className="confirmation--modal">
        <p>are you sure you want to delete this {name}</p>
        <div className="confirmation--btns">
          <button className="danger" onClick={() => deleteOptions("yes")}>
            yes
          </button>
          <button className="success" onClick={() => deleteOptions("no")}>
            no
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
