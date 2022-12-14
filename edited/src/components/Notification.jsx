import React from "react";

const Notification = ({ active, message }) => {
  let messages;
  let bgColor;

  if (message === "success") {
    bgColor = "green";
    messages = "Your message is successfuly sent.I will contact you";
  } else {
    bgColor = "red";
    messages = "Sorry your message is not sent.";
  }

  const style = {
    background: bgColor,
    color: "white",
    position: "absolute",
    top: "80vh",
    width: "92%",
    borderRadius: "7px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transform: "translateY(10px)",
    transition: "all 0.3s linear",
  };
  const show = {
    transform: "translateY(0)",
    opacity: 1,
    transition: "all 0.3s linear",
  };

  const activeStyle = active ? show : {};

  return (
    <div style={{ ...style, ...activeStyle }}>
      <p
        style={{
          fontSize: "12px",
          margin: "0px",
        }}
      >
        {messages}
      </p>
    </div>
  );
};

export default Notification;
