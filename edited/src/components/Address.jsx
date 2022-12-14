import React, { useEffect, useState } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsFillTelephoneFill, BsInstagram, BsTelegram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { ImOffice } from "react-icons/im";
import axios from "axios";
const Address = () => {
  const [adminData, setAdminData] = useState({});

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const { data } = await axios.get(
          "https://www.server.abbaylaw.com/api/users/admin"
        );

        setAdminData(data);
      } catch (e) {
        return null;
      }
    };
    fetchAdmin();
  }, []);

  return (
    <div className="mark-Anthony">
      <div className="center">
        <p>
          <ImOffice className="icon" />
        </p>

        <p>{adminData.address} </p>
      </div>
      <div className="center">
        <p>
          {" "}
          <GrMail className="icon"></GrMail>
        </p>

        <p>{adminData.email}</p>
      </div>
      <div className="center">
        <p>
          <BsFillTelephoneFill className="icon"></BsFillTelephoneFill>
        </p>

        <p>{adminData.phone}</p>
      </div>

      <div className="social-icon">
        <AiOutlineFacebook className="icons fb"></AiOutlineFacebook>
        <BsInstagram className="icons insta"></BsInstagram>
        <BsTelegram className="icons telegram"></BsTelegram>
      </div>
    </div>
  );
};

export default Address;
