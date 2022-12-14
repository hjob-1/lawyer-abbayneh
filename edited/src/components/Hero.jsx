import React from "react";

const Hero = ({ title }) => {
  return (
    <div className="title_container">
      <h2 style={{ color: "white" }} className="titleB">
        {title}
      </h2>
    </div>
  );
};

export default Hero;
