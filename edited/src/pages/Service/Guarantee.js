import React, { useEffect } from "react";

import { GoLaw } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Guarantee = ({ singleGuarantee, index }) => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const { guaranteed, description, id } = singleGuarantee;
  const icons = [
    <BsFillPersonFill className="gIcons " />,
    <FaHandshake className="gIcons " />,
    <GoLaw className="gIcons " />,
  ];
  return (
    <div
      className="gMain"
      key={{ id }}
      id={`id${id}`}
      data-aos={id === 2 ? "fade-left" : "fade-right"}
    >
      <div className="gIconContainer">{icons[index]}</div>
      <h4>{guaranteed}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;
