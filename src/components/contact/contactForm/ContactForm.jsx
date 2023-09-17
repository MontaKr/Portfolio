import React from "react";
import { Wrap } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  return (
    <Wrap>
      <div className="content">
        <h2>Contact Me</h2>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faLocationArrow} />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>Seoul, Korea</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>zhoon95@naver.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required"></textarea>
              <span>Type your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </Wrap>
  );
};

export default ContactForm;
