import React from "react";
import { Wrap } from "./styles";
import ContactBg from "../../components/contact/contactBg/ContactBg";
import ContactForm from "../../components/contact/contactForm/ContactForm";

const ContactWrap = () => {
  return (
    <Wrap>
      <ContactBg />
      <ContactForm />
    </Wrap>
  );
};

export default ContactWrap;
