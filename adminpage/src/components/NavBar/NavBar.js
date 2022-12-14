import React, { useEffect, useRef, useState } from "react";
import Avatar from "../Avatar/Avatar";
import * as MdIcons from "react-icons/md";
import "./navbar.css";
import { messages } from "../../utilities/messages";
import { Notifications } from "../../utilities/notification";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import SliderMenu from "../SliderMenu";
const NavBar = () => {
  const [showMessage, setShowmessage] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const [openSidebar, setOpenSideBar] = useState(false);

  const clickHandler = () => {
    setOpenSideBar(!openSidebar);
  };

  const ref = useRef();

  useEffect(() => {
    const checker = (e) => {
      if (showNotifications && !ref.current.contains(e.target)) {
        setShowNotifications(false);
      }
      if (showMessage && !ref.current.contains(e.target)) {
        setShowmessage(false);
      }
    };

    document.addEventListener("click", checker);
    return () => document.removeEventListener("click", checker);
  }, [showMessage, showNotifications]);

  return (
    <div className="wrapper-Home">
      <div className="whole-navbar">
        <FaIcons.FaBars
          style={{ fontSize: "1.2rem", marginLeft: "20px" }}
          onClick={clickHandler}
        />

        <div className="wrapper-NavBar">
          <div className="wrapper-input">
            <input type="text" placeholder="Search Blog" />
          </div>
          <div className="wrapper-mes-notify">
            <span className="notify-message">1</span>
            <div ref={ref} className="wrapper-notification">
              <MdIcons.MdNotificationsActive
                style={{ fontSize: "1.2rem" }}
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowmessage(false);
                }}
              />
              <div
                className={`drop-notifications ${
                  showNotifications ? "showNotification" : "hideNotification"
                }`}
              >
                {Notifications.map((singleNotification, index) => {
                  const { id, date, notification } = singleNotification;
                  return (
                    <div key={index} className="single-notification">
                      <p>{notification.slice(0, 50)}</p>
                      <p className="date">{date}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              ref={ref}
              className="wrapper-message"
              onClick={() => {
                setShowmessage(!showMessage);
                setShowNotifications(false);
              }}
            >
              <MdIcons.MdOutlineLocalPostOffice
                style={{ fontSize: "1.2rem" }}
              />
              <div
                className={`dreop-messages ${
                  showMessage ? "showMessage" : "hideMessage"
                }`}
              >
                {messages.map((singleMessage) => {
                  const { id, date, sentBy } = singleMessage;
                  return (
                    <Link key={id} to={`/messages/${id}`}>
                      <div className="single-message">
                        <p>{sentBy}</p>
                        <p className="date">{date}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <span className="notify">1</span>

            <Link to="/profile">
              <Avatar />
            </Link>
          </div>
        </div>
      </div>
      <SliderMenu openSidebar={openSidebar} clickHandler={clickHandler} />
    </div>
  );
};
export default NavBar;
