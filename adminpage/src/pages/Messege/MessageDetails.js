import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import moment from "moment";
import { fetchApi } from "../../services/fetchApi";
import axios from "axios";
import { BsTrash } from "react-icons/bs";
const MessageDetails = () => {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const navigate = useNavigate();
  const [specificMessage, setSpecificMessage] = useState({});

  useEffect(() => {
    const initializer = async () => {
      setisLoading(true);
      const data = await fetchApi(
        `messages/specific/${id}`,
        " ",
        " ",
        "GET",
        " "
      );

      setSpecificMessage(data);
      setisLoading(false);
    };
    initializer();
  }, []);
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/messages/delete/${parseInt(id)}`);
      navigate("/messages");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <NavBar />
      <section>
        {isLoading ? (
          "loading"
        ) : (
          <div className="message-details">
            <h3>{specificMessage.subject}</h3>

            <p>{specificMessage.describition}</p>
            <div className="who-sentit">
              <div className="personal--info">
                <span>name:</span>
                <span>{specificMessage.name}</span>
              </div>
              <div className="personal--info">
                <span>phoneOrEmail:</span>
                <a
                  href={`tel:+251${specificMessage.phoneOrEmail.slice(1)}`}
                  style={{ fontWeight: 600, color: "black" }}
                >
                  {specificMessage.phoneOrEmail}
                </a>
              </div>
              <div className="personal--info">
                <span>Sent Date:</span>
                <time>{moment(specificMessage.createdAt).calendar()}</time>
              </div>
            </div>
            <BsTrash
              style={{ color: "red", fontSize: "17px" }}
              onClick={handleDelete}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default MessageDetails;
