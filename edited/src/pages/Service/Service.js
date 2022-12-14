import React, { useEffect } from "react";
import { FaSuitcase } from "react-icons/fa";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { BsFillHouseFill } from "react-icons/bs";
import { VscSymbolProperty } from "react-icons/vsc";
import { RiRefund2Line } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
const Service = ({ singleService, index }) => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  const icons = [
    <MdOutlineFamilyRestroom className="sIcons" />,
    <BsFillHouseFill className="sIcons" />,
    <VscSymbolProperty className="sIcons" />,
    <RiRefund2Line className="sIcons" />,
  ];
  const { serviceText, description } = singleService;
  return (
    <div
      className="sMain"
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
    >
      <div className="sIconContainer">{icons[index]}</div>
      <div className="sText">
        <h4>{serviceText}</h4>
        {description.map((item) => (
          <li>
            {/* {" "}
            <span
              style={{
                color: "#2360dc",
                marginRight: "10px",
                fontSize: "20px",
              }}
            >
              .
            </span> */}
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Service;
