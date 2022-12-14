import React from "react";
import "./service.css";
import { IoMdEye } from "react-icons/io";
const ServiceWidget = () => {
  return (
    <div className="service_widget">
      <div className="services">
        <h2>Services</h2>
        <div className="service_icon">
          <h4>rule of law</h4>{" "}
          <p>
            <IoMdEye />
          </p>
        </div>
        <div className="service_icon">
          <h4> bussines law</h4>{" "}
          <p>
            {" "}
            <IoMdEye />
          </p>
        </div>
        <div className="service_icon">
          <h4>marriage law </h4>{" "}
          <p>
            {" "}
            <IoMdEye />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceWidget;
