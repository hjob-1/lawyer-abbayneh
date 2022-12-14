import React, { useState } from "react";
import Address from "../../components/Address";
import axios from "axios";
import "../../styles/Contact/contact.css";
import Notification from "../../components/Notification";
import { images } from "../../img";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phoneOrEmail: "",
    subject: "",
    describition: "",
  });
  const [isSubmited, setisSubmited] = useState(false);
  const [message, setMessage] = useState("");

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      await axios.post(
        "https://www.server.abbaylaw.com/api/messages/send",
        inputs
      );
      setisSubmited(true);
      console.log("hey there");
      setMessage("success");
      setTimeout(() => {
        setisSubmited(false);
      }, 3000);

      setInputs({
        name: "",
        phoneOrEmail: "",
        subject: "",
        describition: "",
      });
    } catch (e) {
      setisSubmited(true);
      setMessage("danger");
      setTimeout(() => {
        setisSubmited(false);
      }, 2000);
      console.log(e);
    }
  };

  const { subject, describition, phoneOrEmail, name } = inputs;
  return (
    <>
      <div className="main contact_page">
        <div className="description__form">
          <div className="description">
            <h2>
              {/* <span>Appointment</span> Form */}
              Contact Me
            </h2>
          </div>
          <form
            className="contact__form"
            onSubmit={(evt) => submitHandler(evt)}
          >
            <input
              type="text"
              placeholder="Your Name*"
              name="name"
              value={name}
              onChange={(e) => inputHandler(e)}
            />
            <input
              type="text"
              placeholder="Your E-Mail / Phone Number * "
              name="phoneOrEmail"
              value={phoneOrEmail}
              onChange={(e) => inputHandler(e)}
            />
            <input
              type="text"
              placeholder="Subject Of Message *"
              name="subject"
              value={subject}
              onChange={(e) => inputHandler(e)}
            />

            <textarea
              cols="30"
              rows="10"
              placeholder="Your Message *"
              name="describition"
              value={describition}
              onChange={(e) => inputHandler(e)}
            ></textarea>
            <button type="submit" className="btn-submit">
              send message
            </button>
          </form>
        </div>
        <Address />

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.559474234844!2d38.73082361407079!3d9.012619241728618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b867718ce2ccf%3A0x4df771ae11aecc6c!2zU3VwcmVtZSBDb3VydCwg4Yqg4Yuy4Yi1IOGKoOGJoOGJow!5e0!3m2!1sam!2set!4v1642627989452!5m2!1sam!2set"
            styles={{
              border: "0",
              allowfullscreen: "",
              loading: "lazy",
            }}
          ></iframe>
        </div>
        <Notification active={isSubmited} message={message} />
      </div>
    </>
  );
};
export default Contact;
