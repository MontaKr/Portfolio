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

// const SkillList = () => {
//   const [degree, setDegree] = useState(0);

//   const imgArray = [
//     { num: 8, name: "HTML", src: html },
//     { num: 1, name: "CSS", src: css },
//     { num: 2, name: "JAVASCRIPT", src: javascript },
//     { num: 3, name: "TYPESCRIPT", src: typescript },
//     { num: 4, name: "REACT", src: react },
//     { num: 5, name: "VUE", src: vue },
//     { num: 6, name: "NEXT.JS", src: nextjs },
//     { num: 7, name: "ZUSTAND", src: zustand },
//   ];

//   return (
//     <Wrap degree={degree}>
//       <div className="container">
//         <div className="box">
//           {imgArray.map((val, idx) => {
//             return (
//               <Span num={val.num}>
//                 <img src={val.src} />
//                 <span> {val.name}</span>
//               </Span>
//             );
//           })}
//         </div>
//         <div className="btns">
//           <div
//             className="btn prev"
//             onClick={() => {
//               setDegree(degree + 45);
//             }}
//           ></div>
//           <div
//             className="btn next"
//             onClick={() => {
//               setDegree(degree - 45);
//             }}
//           ></div>
//         </div>
//       </div>
//     </Wrap>
//   );
// };

const SkillList = forwardRef((props, ref) => {
  const [degree, setDegree] = useState(0);

  const imgArray = [
    { num: 8, name: "HTML", src: html },
    { num: 1, name: "CSS", src: css },
    { num: 2, name: "JAVASCRIPT", src: javascript },
    { num: 3, name: "TYPESCRIPT", src: typescript },
    { num: 4, name: "REACT", src: react },
    { num: 5, name: "VUE", src: vue },
    { num: 6, name: "NEXT.JS", src: nextjs },
    { num: 7, name: "ZUSTAND", src: zustand },
  ];

  return (
    <Wrap ref={ref} degree={degree}>
      <div className="container">
        <div className="box">
          {imgArray.map((val, idx) => {
            return (
              <Span num={val.num}>
                <img src={val.src} />
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
