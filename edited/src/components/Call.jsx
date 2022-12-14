import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const Call = () => {
  const wrapper = {
    position: "fixed",
    top: "89vh",
    right: "100px",
    background: "rgb(207, 201, 201)",
    borderRadius: "50%",
    height: "60px",
    width: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={wrapper} className="animation">
      <a
        style={{
          margin: "0px",
          padding: "0px",
          color: "green",
          fontSize: "22px",
        }}
        href="tel:251910741580"
      >
        <BsFillTelephoneFill />
      </a>
    </div>
  );
};

export default Call;
