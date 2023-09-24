import React from "react";
import { Wrap, Img } from "./styles";
import music from "../../../assets/interests/music.png";
import movie from "../../../assets/interests/movie.png";
import book from "../../../assets/interests/book.png";
import game from "../../../assets/interests/game.png";
import code from "../../../assets/interests/code.png";
import coffee from "../../../assets/interests/coffee.png";
import basketball from "../../../assets/interests/basketball.png";
import photo from "../../../assets/interests/photo.png";
import violin from "../../../assets/interests/violin.png";
import soccer from "../../../assets/interests/soccer.png";

const AboutInterest = () => {
  const parallax = (e) => {
    e.currentTarget.querySelectorAll(".layer").forEach((layer) => {
      const speed = layer.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  const imgArray = [
    { src: music, speed: "-5" },
    { src: movie, speed: "5" },
    { src: book, speed: "2" },
    { src: game, speed: "6" },
    { src: code, speed: "8" },
    { src: coffee, speed: "-2" },
    { src: basketball, speed: "4" },
    { src: photo, speed: "-9" },
    { src: violin, speed: "6" },
    { src: soccer, speed: "-3" },
  ];

  return (
    <Wrap>
      <div className="container">
        <section onMouseMove={parallax}>
          {imgArray.map((val, key) => {
            return (
              <Img
                className="layer"
                key={key}
                src={val.src}
                data-speed={val.speed}
              ></Img>
            );
          })}
          <h2 className="layer" data-speed="2">
            Interests
          </h2>
        </section>
      </div>
    </Wrap>
  );
};

export default AboutInterest;
