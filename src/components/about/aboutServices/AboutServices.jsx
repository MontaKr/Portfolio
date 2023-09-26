import React, { forwardRef } from "react";
import { Wrap } from "./styles";
import code from "../../../assets/services/code.png";
import ui from "../../../assets/services/ui.png";
import improve from "../../../assets/services/improve.png";

const AboutServices = React.forwardRef((props, ref) => {
  const serviceArray = [
    {
      icon: code,
      title: "Web Develope",
      content:
        "I professionally create websites by integrating a variety of necessary functions and the latest technologies",
    },
    {
      icon: ui,
      title: "UI / UX",
      content:
        "I am an expert in responsive web design and always aim to provide a fresh user experience in design",
    },
    {
      icon: improve,
      title: "Improve performance",
      content:
        "I work on optimizing web performance by making the website lightweight and always consider the reusability of the code.",
    },
  ];

  return (
    <Wrap ref={ref}>
      <div className="container">
        <div className="textBx">
          <span>Services</span>
        </div>
        <div className="serviceBx">
          <div className="serviceWrap">
            {serviceArray.map((val, idx) => {
              return (
                <div className="cardBx" key={idx}>
                  <div className="iconBx">
                    <img src={val.icon} alt="icon" loading="lazy" />
                  </div>
                  <div className="nameBx">
                    <span>{val.title}</span>
                  </div>
                  <div className="contentBx">
                    <span>{val.content}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrap>
  );
});

export default AboutServices;
