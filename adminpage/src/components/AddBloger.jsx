import React, { useState } from "react";
import { add_new_bloger } from "../services/apiEndUrls";
import { fetchApi } from "../services/fetchApi";
import "./css/addbloger.css";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJmdWxsX25hbWUiOiJBYmF5bmVoIEJhZGVnIiwiZW1haWwiOiJhYmF5bmVoQGdtYWlsLmNvbSIsImFkZHJlc3MiOiJsaWRldGEsYWRkaXMgYnVpbGRpbmcgM3JkIGZsb29yIiwiYWJvdXRfam9iIjoibGF3eWVyIiwicGhvbmUiOjkyNzg1OTIxNywicGFzc3dvcmQiOiIwMDAwIiwiaW1hZ2UiOiIvaW1hZ2VzL21hbi5qcGciLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIxLTEyLTA4VDEzOjIzOjQyLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTEyLTA4VDEzOjIzOjQyLjAwMFoiLCJpYXQiOjE2NDI1NzY1NTgsImV4cCI6MTY0NTE2ODU1OH0 .OhH14GOWv8lFPRIdyn6sa3rasnb9e1i5U1vJCH2x09w";

const registerBloger = async (bloger, setisLoading, setCreated) => {
  const result = await fetchApi(add_new_bloger, token, " ", "POST", bloger);
  if (result.message === "created") {
    console.log(result.message);
    setisLoading(false);
    setCreated(true);
  } else console.log(result.message, "in else");
};
const AddBloger = () => {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [created, setCreated] = useState(false);

  const handleInputChange = (e) => {
    setError(false);
    setInputs((inputs) => {
      return { ...inputs, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    if (
      inputs.password === inputs.confirm_password &&
      inputs.full_name !== "" &&
      inputs.password
    ) {
      const { confirm_password, ...rest } = inputs;
      setisLoading(true);
      registerBloger(rest, setisLoading, setCreated);
      setInputs({});
    } else {
      setError(true);
      return;
    }
  };
  return (
    <>
      <div className="title">
        <p>Adding Bloger Will Help You Grow Your website</p>
      </div>
      <div className="input_wrapper">
        <span>Full_Name </span>
        <input
          className={`inputs ${error ? " errorFull" : ""}`}
          name="full_name"
          type="text"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="input_wrapper">
        <span>Phone </span>
        <input
          className="inputs"
          type="number"
          name="phone"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="input_wrapper">
        <span>Password</span>
        <input
          className={`inputs ${error ? " errorPass" : ""}`}
          type="password"
          name="password"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="input_wrapper">
        <span>confirm Password </span>
        <input
          className={`inputs ${error ? " errorPass" : ""}`}
          type="password"
          name="confirm_password"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="button_wrapper" onClick={handleSubmit}>
        {created ? (
          <button>Created</button>
        ) : (
          <button>{isLoading ? "Loading" : "Add Bloger"}</button>
        )}
      </div>
    </>
  );
};

export default AddBloger;
