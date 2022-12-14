import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { bloger_sign_in } from "../../services/apiEndUrls";
import { fetchApi } from "../../services/fetchApi";
import "./login.css";
import { motion } from "framer-motion";
import { loginVariant } from "../../utilities/animation";
const Login = () => {
  const [inputs, setInputs] = useState({ password: " ", phone: "" });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (evt) => {
    setError(false);
    setInputs({ ...inputs, [evt.target.name]: evt.target.value });
  };

  const UserLogin = async () => {
    if (inputs.password !== " " && inputs.phone !== " ") {
      const data = await fetchApi(bloger_sign_in, " ", " ", "POST", inputs);
      console.log(data);

      if (data !== "not found") {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/home");
      } else setError(true);
    } else {
      console.log("you leave it empty");
    }
  };

  useEffect(() => {
    const isLoged = () => {
      const logedUser = JSON.parse(localStorage.getItem("user"));
      logedUser ? navigate("/home") : navigate("/");
    };
    isLoged();
  }, []);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={loginVariant}
      className="login_container"
    >
      <div className="login_img_wrapper ">
        <img src="./images/login.jpg" alt="background" />
      </div>

      <div className="content_wrapper">
        <div className="content_items">
          <div className="title">
            <h2>Login</h2>
          </div>
          <div className="login_input">
            <p>Phone </p>
            <input
              type="number"
              name="phone"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="login_input">
            <p>Password</p>
            <input
              type="password"
              name="password"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="forgot_password">
            <p>Forgot password ?</p>
          </div>
          <div className="login_btn" onClick={UserLogin}>
            <button>login</button>
          </div>
          {error && (
            <p id="fail_login_indicator">phone or password is incorrect.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
