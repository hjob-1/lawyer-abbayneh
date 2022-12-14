import React, { useEffect, useRef } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdContacts, MdOndemandVideo } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { RiHome2Fill } from "react-icons/ri";

import { ImImages } from "react-icons/im";

const Slider = ({ isShow, setisShow }) => {
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const closeModal = (e) => {
      if (isShow && !ref.current.contains(e.target)) {
        setisShow(false);
      }
    };
    document.addEventListener("click", closeModal);
    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, [isShow]);

  const navigation = (target) => {
    navigate(target);
    setisShow(false);
  };

  return (
    <div ref={ref} className={isShow ? "slide active" : "slide"}>
      <div className="slider_content">
        <div className="slider_link">
          <span>
            <RiHome2Fill />
          </span>
          <p onClick={() => navigation("/")}>Home</p>
        </div>

        <div className="slider_link">
          <span>
            <BsFillPersonFill />
          </span>
          <p onClick={() => navigation("/about")}>About</p>
          {/* <Link to="/about">About</Link> */}
        </div>
        <div className="slider_link">
          <span>
            <MdContacts />
          </span>
          <p onClick={() => navigation("/contacts")}>Contact</p>
        </div>
        <div className="slider_link">
          <span>
            <GiNotebook />
          </span>
          <p onClick={() => navigation("/blog")}>Blog</p>
        </div>

        <div className="slider_link">
          <span>
            <ImImages />
          </span>
          <p onClick={() => navigation("/galleries")}>Gallaries</p>
        </div>
        <div className="slider_link">
          <span>
            <MdOndemandVideo />
          </span>
          <p onClick={() => navigation("/videos")}>Videos</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
