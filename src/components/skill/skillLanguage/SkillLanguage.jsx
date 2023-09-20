import React from "react";
import { Wrap } from "./styles";
import KoreaFlag from "../../../assets/language/KoreanFlag.png";
import EnglishFlag from "../../../assets/language/EnglishFlag.png";
import JapanFlag from "../../../assets/language/JapanFlag.png";
import KoreanWord from "../../../assets/language/KoreanWord.png";
import JapanWord from "../../../assets/language/JapanWord.png";
import EnglishWord from "../../../assets/language/EnglishWord.png";

const lanArray = [
  { name: "Korea", color: "#fff", flagImg: KoreaFlag, langImg: KoreanWord },
  {
    name: "English",
    color: "#fff",
    flagImg: EnglishFlag,
    langImg: EnglishWord,
  },
  { name: "Japan", color: "#fff", flagImg: JapanFlag, langImg: JapanWord },
];

const SkillLanguage = () => {
  return (
    <Wrap>
      <div className="container">
        {lanArray.map((val, idx) => {
          return (
            <div className="card">
              <div className="circle">
                <img src={val.flagImg} className="logo" />
              </div>
              <div className="content">
                <h2>{val.name}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi distinctio id eveniet obcaecati perspiciatis.
                </p>
                <a href="#">Explore More</a>
              </div>
              <img src={val.langImg} className="product_img" />
            </div>
          );
        })}
      </div>
    </Wrap>
  );
};

export default SkillLanguage;
