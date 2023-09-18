import React, { useRef } from "react";
import { Wrap } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_alpzjjk",
        "template_n9woofr",
        formRef.current,
        "tALHXmW1o6Hs3_H3S"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
          <form ref={formRef} onSubmit={sendEmail}>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="email" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea name="message" required="required"></textarea>
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
