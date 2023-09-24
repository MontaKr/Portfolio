import React from "react";
import { Wrap } from "./style";
import AboutMain from "../../components/about/aboutMain/AboutMain";
import AboutInterest from "../../components/about/aboutInterest/AboutInterest";

const AboutWrap = () => {
  return (
    <Wrap>
      <AboutMain />
      <AboutInterest />
    </Wrap>
  );
};

export default AboutWrap;
