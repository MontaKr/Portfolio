import React, { useEffect, useRef, forwardRef } from "react";
import { Box, Wrap } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy, faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import profile from "../../../assets/profile/Nick.jpg";

const AboutMain = React.forwardRef((props, ref) => {
  const imgRef = props.imgRef;

  //rainbow border effect
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--gradient-pos-x", `50%`);
    root.style.setProperty("--gradient-pos-y", `50%`);

    const handleMouseMove = (e) => {
      const rect = imgRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      root.style.setProperty("--gradient-pos-x", `${x}%`);
      root.style.setProperty("--gradient-pos-y", `${y}%`);
    };

    const handleMouseOut = () => {
      root.style.setProperty("--gradient-pos-x", `50%`);
      root.style.setProperty("--gradient-pos-y", `50%`);
    };

    imgRef.current.addEventListener("mousemove", handleMouseMove);
    imgRef.current.addEventListener("mouseout", handleMouseOut);

    return () => {
      if (imgRef.current) {
        imgRef.current.removeEventListener("mousemove", handleMouseMove);
        imgRef.current.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);

  return (
    <Box ref={ref}>
      <div className="container">
        <Wrap ref={imgRef}>
          <div className="neon">
            <div className="gradient"></div>
          </div>
          <div className="border">
            <div className="gradient"></div>
          </div>
          <div className="imgContainer">
            <img src={profile} alt="profile" loading="lazy" />
          </div>
        </Wrap>
        <div className="skillContainer">
          <ul>
            <li>
              <FontAwesomeIcon className="icon" icon={faCode} />
              <span>Front-End</span>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faPenFancy} />
              <span>Web Publishing</span>
            </li>
            <li>
              <FontAwesomeIcon className="icon" icon={faGlobe} />
              <span>3 Languages</span>
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
});

export default AboutMain;
