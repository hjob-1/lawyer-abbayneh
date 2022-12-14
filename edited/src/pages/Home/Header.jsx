import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home/header.css";

import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Slider from "../../components/Slider";
const Header = () => {
  const [isShow, setisShow] = useState(false);
  return (
    <header>
      <div className="humburger" onClick={() => setisShow(!isShow)}>
        {isShow ? <p className="active_p">X</p> : <AiOutlineMenu />}
      </div>

      <div className="logo">
        <div className="logo_img">
          <Link to="/">
            <img
              src="/img/logo-modified.png"
              alt="abayneh logo"
              className="logoImg"
            />
          </Link>
        </div>

        <div className="afterLogo">
          <h2>Abayneh Badeg</h2>
        </div>
      </div>
      {/* <div className="hide motto">
        <h3>Realize your constitutional rights </h3>
        <p>with qualified help</p>
      </div> */}
      <Slider isShow={isShow} setisShow={setisShow} />

      <div className="hide phone">
        <div className="hIconContainer">
          <BsFillTelephoneFill />
        </div>
        <div className="phone_holder">
          <a href="tel:+251910741580">0910741580</a>
        </div>
      </div>
    </header>
  );
};
export default Header;
