import React, { useEffect } from "react";
import "../../styles/Home/main.css";

import { Link } from "react-router-dom";

import LatestBlog from "../../components/LatestBlog";
import Services from "../Service/Services";

import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
      <main>
        <div className="color_bg">
          <h1 data-aos="fade-right">THE RIGHT LAWYER</h1>
          <p data-aos="fade-left" data-aos-delay="1000" className="parag">
            MAKES ALL THE DIFFERENCE
          </p>
          <p
            className="color_bg_contact"
            data-aos="zoom-in"
            data-aos-delay="2000"
          >
            <Link to="/contacts"> Contact Me</Link>
          </p>
        </div>
      </main>
      <Services />
      <div className="home">
        <LatestBlog />
      </div>
    </>
  );
};

export default Main;
