import React, { useState } from "react";

import { BsArrowRight } from "react-icons/bs";
import "../../styles/About/about.css";

const About = ({ images }) => {
  return (
    <>
      {/* start of first section */}
      <section className="__section">
        <h2>About</h2>
        <div className="img_wrapper">
          <img src="./img/avatar.jpg" alt="perosnal" />
        </div>
      </section>
      {/* end of the first section */}
      <section className="aboutMark_latestPost">
        <div className="__about-Mark">
          <h3>
            <span className="special">Abayneh</span> Badeg–Lawyer
          </h3>
          <div className="aboutMe">
            <p>
              The owner of this website is the former notary public at Ethiopian
              Federal Documents Authentication and Registration Office (now
              Agency), legal researcher, assistant judge and judge at Ethiopian
              Federal and Addis Ababa city courts since May 2012 up to August
              2015.Now,{" "}
              <strong>
                he is a licensed Ethiopian Federal attorney and consultant at
                law{" "}
              </strong>
              since August 2015.
            </p>
          </div>
          <div className="why">
            <h4>Major services to be given by the attorney </h4>
            <div>
              <BsArrowRight style={{ color: "#2360dc" }} />
              <span>
                representing clients in courts and tribunals both in civil and
                criminal litigations.{" "}
              </span>
            </div>

            <div>
              <BsArrowRight style={{ color: "#2360dc" }} />
              <span>
                consulting clients both in civil and criminal law issues
              </span>
            </div>
            <div>
              <BsArrowRight style={{ color: "#2360dc" }} />
              <span>
                settling client’s cases in Arbitration and other alternative
                dispute resolutions, when it necessary
              </span>
            </div>
            <div>
              <BsArrowRight style={{ color: "#2360dc" }} />
              <span>
                documents preparation (like pleadings, contracts, memorandum and
                article of business and non-profit organizations…etc.){" "}
              </span>
            </div>
            <div>
              <BsArrowRight style={{ color: "#2360dc" }} />
              <span>
                conducting legal researches and giving legal trainings
              </span>
            </div>
          </div>
        </div>

        {/* end of third section */}
      </section>
      {/* end of third secton */}
    </>
  );
};
export default About;

//  <div className="__private-lawyer">
//    <h3 className="header">
//      <span>why</span> Private Lawyer
//    </h3>

//    <div className="__accordion">
//      <div className="__accordion-header">
//        <h3>Pellentesque tincidunt accumsan hendrerit</h3>
//        <p onClick={() => setShow1(!show1)}>
//          {!show1 ? (
//            <AiOutlinePlus className="__plus-icon" />
//          ) : (
//            <AiOutlineMinus className="__minus-icon " />
//          )}
//        </p>
//      </div>

//      <div className={`__wrapper ${show1 ? "showAccordion" : "hideAccoriond"}`}>
//        <div className=" __inner-body ">
//          <div className="__container-icon">
//            <VscLaw className="icon__" />
//          </div>

//          <div>
//            <h3>Luisque et dignissim risus metus</h3>
//            <p>
//              Praesent tincidunt, enim quis convallis sagittis, orci eros luctus
//              le, volutpat tincidunt lorem nulla in lectus. Nam vitae porta est.
//              Nullal nec dolor quam.
//            </p>
//          </div>
//        </div>
//        <div className="__inner-body">
//          <div className="__container-icon">
//            <BiMessageDetail className="icon__" />
//          </div>
//          <div>
//            <h3>Suspendisse volutpat dolor quis</h3>
//            <p>
//              Nullam quis dui at felis malesuada mattis. Integer dui nisl accum
//              vitae lobortis ac, molestie nec lectus. Quisque id pretium
//              tortoren. Nunc quam ligula, fringilla.
//            </p>
//          </div>
//        </div>
//        <div></div>
//      </div>

//      <div className="__accordion-header">
//        <h3>Pellentesque tincidunt accumsan hendrerit</h3>

//        <p onClick={() => setShow(!show)}>
//          {!show ? (
//            <AiOutlinePlus className="__plus-icon" />
//          ) : (
//            <AiOutlineMinus className="__minus-icon" />
//          )}
//        </p>
//      </div>

//      <div className={`__wrapper ${show ? " showAccordion" : " hideAccoriond"}`}>
//        <div className="__inner-body">
//          <div className="__container-icon">
//            <VscLaw className="icon__" />
//          </div>

//          <div>
//            <h3>Luisque et dignissim risus metus</h3>
//            <p>
//              Praesent tincidunt, enim quis convallis sagittis, orci eros luctus
//              le, volutpat tincidunt lorem nulla in lectus. Nam vitae porta est.
//              Nullal nec dolor quam.
//            </p>
//          </div>
//        </div>
//        <div className="__inner-body">
//          <div className="__container-icon">
//            <BiMessageDetail className="icon__" />
//          </div>
//          <div>
//            <h3>Suspendisse volutpat dolor quis</h3>
//            <p>
//              Nullam quis dui at felis malesuada mattis. Integer dui nisl accum
//              vitae lobortis ac, molestie nec lectus. Quisque id pretium
//              tortoren. Nunc quam ligula, fringilla.
//            </p>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>;
