import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LineChart from "../../charts/LineChart";
import Address from "../../components/Address";
import Avator from "../../components/Avator";
import NavBar from "../../components/NavBar/NavBar";
import { blogers_list } from "../../services/apiEndUrls";
import { fetchApi } from "../../services/fetchApi";
import { blogerVariant } from "../../utilities/animation";
import "./blogerdetail.css";

const BlogerDetail = () => {
  const { user_id } = useParams();
  const navigate = useNavigate();

  const [bloger, setBloger] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [isDeleted, setisDeleted] = useState({ success: false, error: false });

  useEffect(() => {
    const initializer = async () => {
      setisLoading(true);
      setBloger(
        await fetchApi(blogers_list + "/" + user_id, " ", " ", "GET", " ")
      );
      setisLoading(false);
    };
    initializer();
  }, []);

  const handleDelete = async (user_id) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJmdWxsX25hbWUiOiJBYmF5bmVoIEJhZGVnIiwiZW1haWwiOiJhYmF5bmVoQGdtYWlsLmNvbSIsImFkZHJlc3MiOiJsaWRldGEsYWRkaXMgYnVpbGRpbmcgM3JkIGZsb29yIiwiYWJvdXRfam9iIjoibGF3eWVyIiwicGhvbmUiOjkyNzg1OTIxNywicGFzc3dvcmQiOiIwMDAwIiwiaW1hZ2UiOiIvaW1hZ2VzL21hbi5qcGciLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIxLTEyLTA4VDEzOjIzOjQyLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTEyLTA4VDEzOjIzOjQyLjAwMFoiLCJpYXQiOjE2NDE3Mjk5MjQsImV4cCI6MTY0NDMyMTkyNH0.0wBfBzRZpmsLEUQYjbnj6DT6U84mNSsq6zhraEIlpf8";

    try {
      await fetchApi(
        blogers_list + "/delete/" + user_id,
        token,
        " ",
        "DELETE",
        " "
      );
      setisDeleted({ ...isDeleted, success: true });
      setTimeout(() => setisDeleted({ ...isDeleted, success: false }), 2000);
    } catch (err) {
      setisDeleted({ ...isDeleted, error: true });
      setTimeout(() => setisDeleted({ ...isDeleted, error: false }), 2000);
    }
  };

  //images displayed using backend links

  return (
    <div className="bloger_detail_page">
      <NavBar />
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="bloger_hero">
            <img src="/images/cover.jpg" alt="cover picture" />
          </div>
          <div className="bloger_avator_container detail">
            <Avator
              full_name={bloger.full_name}
              img={`http://localhost:4000/${bloger.image}`}
            />
          </div>
          <div className="bloger_address_container">
            <div className="bloger_info">
              <h4>Bloger Information</h4>
              <Address
                email={bloger.email}
                phone={bloger.phone}
                address={bloger.address}
                job={bloger.about_job}
                showAddress={true}
              />
            </div>
          </div>
          <div className="blogger_analaytics">
            <p>{bloger.full_name}'s Weekly Survey</p>
            <LineChart user_id={bloger.user_id} />
          </div>
          <span
            style={{ color: "#F93154", padding: "20px " }}
            onClick={() => handleDelete(bloger.user_id)}
          >
            Delete
          </span>
          <span style={{ textTransform: "capitalize", color: "black" }}>
            Bloger {bloger.full_name}
          </span>
          {isDeleted.success && (
            <p style={{ background: "green", padding: "2px" }}>
              user deleted,go back to check other bloger information
            </p>
          )}
          {isDeleted.error && (
            <p style={{ background: "red", padding: "2px" }}>
              system error please try again.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default BlogerDetail;
