import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogers_list } from "../../services/apiEndUrls";
import { fetchApi } from "../../services/fetchApi";
import "./blogerswidget.css";

const BlogersWidget = () => {
  const [blogers, setNumBlogers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJmdWxsX25hbWUiOiJBYmF5bmVoIEJhZGVnIiwiZW1haWwiOiJhYmF5bmVoQGdtYWlsLmNvbSIsImFkZHJlc3MiOiJsaWRldGEsYWRkaXMgYnVpbGRpbmcgM3JkIGZsb29yIiwiYWJvdXRfam9iIjoibGF3eWVyIiwicGhvbmUiOjkyNzg1OTIxNywicGFzc3dvcmQiOiIwMDAwIiwiaW1hZ2UiOiIvaW1hZ2VzL21hbi5qcGciLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIxLTEyLTA4VDEzOjIzOjQyLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTEyLTA4VDEzOjIzOjQyLjAwMFoiLCJpYXQiOjE2NDE3Mjc5MTAsImV4cCI6MTY0NDMxOTkxMH0.-llTrWyG6gfOhrZK903q2uQ8E47CIMPpJCQCIxhHEo8";

  useEffect(() => {
    const initializer = async () => {
      setisLoading(true);
      setNumBlogers(
        await fetchApi(blogers_list + "/number/length", token, " ", "GET", " ")
      );
      setisLoading(false);
    };
    initializer();
  }, []);
  console.log(blogers);
  return (
    <div className="card_container">
      {isLoading ? (
        "loading"
      ) : (
        <div className="card_items">
          <div className="card_item_left">
            <h2>{blogers.length}</h2>
            <p>Blogers</p>
          </div>
          <div className="card_item_right">
            <Link to="/blogers">
              <button>view </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogersWidget;
