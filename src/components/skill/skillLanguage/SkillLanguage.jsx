import React, { forwardRef } from "react";
import { Wrap, Card } from "./styles";
import KoreaFlag from "../../../assets/language/KoreanFlag.png";
import EnglishFlag from "../../../assets/language/EnglishFlag.png";
import JapanFlag from "../../../assets/language/JapanFlag.png";
import KoreanWord from "../../../assets/language/KoreanWord.png";
import JapanWord from "../../../assets/language/JapanWord.png";
import EnglishWord from "../../../assets/language/EnglishWord.png";

const lanArray = [
  {
    name: "Korea",
    color: "#EEE3CB",
    text: "• Native Language",
    flagImg: KoreaFlag,
    langImg: KoreanWord,
  },
  {
    name: "English",
    text: (
      <>
        • Business Level <br />• TOEIC 805
      </>
    ),
    color: "#D7C0AE",
    flagImg: EnglishFlag,
    langImg: EnglishWord,
  },
  {
    name: "Japan",
    text: (
      <>
        • Business Level <br />
        • JLPT N2 <br />• 1 Year Studying Abroad (Kyoto)
      </>
    ),
    color: "#967E76",
    flagImg: JapanFlag,
    langImg: JapanWord,
  },
];

const SkillLanguage = forwardRef((props, ref) => {
  return (
    <Wrap ref={ref}>
      <span className="title anim">Language</span>
      <div className="container anim">
        {lanArray.map((val, idx) => {
          return (
            <div className="anim">
              <Card clr={val.color}>
                <div className="circle">
                  <img src={val.flagImg} className="logo" loading="lazy" />
                </div>
                <div className="content">
                  <h2>{val.name}</h2>
                  <p>{val.text}</p>
                </div>
                <img src={val.langImg} className="product_img" />
              </Card>
            </div>
          );
        })}
      </div>
    </Wrap>
  );
});

export default SkillLanguage;
