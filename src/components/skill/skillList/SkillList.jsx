import React, { useState, forwardRef } from "react";
import { Wrap, Span } from "./styles";
import html from "../../../assets/skills/html.png";
import css from "../../../assets/skills/css.png";
import javascript from "../../../assets/skills/javascript.png";
import typescript from "../../../assets/skills/typescript.png";
import react from "../../../assets/skills/react.png";
import vue from "../../../assets/skills/vue.png";
import nextjs from "../../../assets/skills/next.png";
import zustand from "../../../assets/skills/zustand.png";
import htmlSmall from "../../../assets/skills/html-small.jpg";
import cssSmall from "../../../assets/skills/css-small.jpg";
import javascriptSmall from "../../../assets/skills/javascript-small.jpg";
import typescriptSmall from "../../../assets/skills/typescript-small.jpg";
import reactSmall from "../../../assets/skills/react-small.jpg";
import vueSmall from "../../../assets/skills/vue-small.jpg";
import nextjsSmall from "../../../assets/skills/next-small.jpg";
import zustandSmall from "../../../assets/skills/zustand-small.jpg";

const SkillList = forwardRef((props, ref) => {
  const [degree, setDegree] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (name) => {
    setLoadedImages((prevImages) => ({ ...prevImages, [name]: true }));
  };

  const imgArray = [
    { num: 8, name: "HTML", src: html, small: htmlSmall },
    { num: 1, name: "CSS", src: css, small: cssSmall },
    { num: 2, name: "JAVASCRIPT", src: javascript, small: javascriptSmall },
    { num: 3, name: "TYPESCRIPT", src: typescript, small: typescriptSmall },
    { num: 4, name: "REACT", src: react, small: reactSmall },
    { num: 5, name: "VUE", src: vue, small: vueSmall },
    { num: 6, name: "NEXT.JS", src: nextjs, small: nextjsSmall },
    { num: 7, name: "ZUSTAND", src: zustand, small: zustandSmall },
  ];

  return (
    <Wrap ref={ref} degree={degree}>
      <span className="title">Front-End</span>
      <div className="container">
        <div className="box">
          {imgArray.map((val, idx) => {
            const isLoaded = loadedImages[val.name];
            return (
              <Span num={val.num} key={val.name}>
                <img
                  src={isLoaded ? val.src : val.small}
                  alt={val.name}
                  loading="lazy"
                  onLoad={() => handleImageLoad(val.name)}
                />
                <span> {val.name}</span>
              </Span>
            );
          })}
        </div>
        <div className="btns">
          <div
            className="btn prev"
            onClick={() => {
              setDegree(degree + 45);
            }}
          ></div>
          <div
            className="btn next"
            onClick={() => {
              setDegree(degree - 45);
            }}
          ></div>
        </div>
      </div>
    </Wrap>
  );
});

export default SkillList;
