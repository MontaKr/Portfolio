import React, { useEffect, useRef } from "react";
import { Box, Wrap } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy, faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

const AboutMain = () => {
  const imgRef = useRef(null);

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

  //page landing effect
  useEffect(() => {
    gsap.to(".skillContainer ul li", {
      duration: 1,
      opacity: 1.5,
      x: 0,
      ease: "power3.inOut",
      delay: 0.8,
      stagger: 0.25,
    });

    gsap.to(imgRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <Box>
      <Wrap ref={imgRef}>
        <div className="neon">
          <div className="gradient"></div>
        </div>
        <div className="border">
          <div className="gradient"></div>
        </div>
        <div className="imgContainer">
          <img
            src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Nick-Wilde.Zootopia.webp"
            alt="profile"
          />
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
    </Box>
  );
};

export default AboutMain;
