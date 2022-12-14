import React from "react";
import Avatar from "./Avatar/Avatar";
import { Link } from "react-router-dom";

import { sideBarData } from "../utilities/sideBarData";
const SliderMenu = ({ openSidebar, clickHandler }) => {
  return (
    <div className="side-others">
      <div className={`wrapper-SideBar ${openSidebar ? "active" : "hide"}`}>
        <div className="Nav-Header">
          <h2 className="Header-title">Admin</h2>
          <div className="Nav-status">
            <span className="status"></span>
            <Avatar />
            <div className="info-Admin">
              <h2>Abayneh</h2>
              <h4>Admin</h4>
            </div>
          </div>
        </div>
        {sideBarData.map((listitem) => {
          const { id, icon, Path, text } = listitem;
          return (
            <div key={id} className="ListItem">
              <span>{icon}</span>
              <li>
                <Link to={Path} onClick={clickHandler}>
                  {text}
                </Link>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SliderMenu;
