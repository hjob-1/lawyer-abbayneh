import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import AddBloger from "../../components/AddBloger";
import ListOfBloger from "../../components/ListOfBloger";
import Modal from "../../components/Modal";
import NavBar from "../../components/NavBar/NavBar";
import { blogers_list } from "../../services/apiEndUrls";
import { fetchApi } from "../../services/fetchApi";
import { blogerVariant } from "../../utilities/animation";
import "./blogerscreen.css";
const BlogerScreen = () => {
  const [blogers, setBlogers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJmdWxsX25hbWUiOiJBYmF5bmVoIEJhZGVnIiwiZW1haWwiOiJhYmF5bmVoQGdtYWlsLmNvbSIsImFkZHJlc3MiOiJsaWRldGEsYWRkaXMgYnVpbGRpbmcgM3JkIGZsb29yIiwiYWJvdXRfam9iIjoibGF3eWVyIiwicGhvbmUiOjkyNzg1OTIxNywicGFzc3dvcmQiOiIwMDAwIiwiaW1hZ2UiOiIvaW1hZ2VzL21hbi5qcGciLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIxLTEyLTA4VDEzOjIzOjQyLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTEyLTA4VDEzOjIzOjQyLjAwMFoiLCJpYXQiOjE2NDE3Mjk5MjQsImV4cCI6MTY0NDMyMTkyNH0.0wBfBzRZpmsLEUQYjbnj6DT6U84mNSsq6zhraEIlpf8";

  useEffect(() => {
    const initializer = async () => {
      setisLoading(true);
      setBlogers(await fetchApi(blogers_list, token, " ", "GET", " "));
      setisLoading(false);
    };
    initializer();
  }, []);
  return (
    <>
      <NavBar />

      <div className="bloger_screen">
        <div className="blogers_list">
          {isLoading ? "loading" : <ListOfBloger blogers={blogers} />}
        </div>
        {!isOpen ? (
          <div className="add_bloger" onClick={() => setisOpen(!isOpen)}>
            <button>+</button>
          </div>
        ) : (
          ""
        )}

        <Modal
          isOpen={isOpen}
          setisOpen={setisOpen}
          optionalAnimation={{
            visible: {
              y: 0,
              x: 0,
            },
            hidden: {
              y: 300,
              x: 300,
            },
          }}
        >
          <AddBloger />
        </Modal>
      </div>
    </>
  );
};

export default BlogerScreen;
