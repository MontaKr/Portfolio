import React, { useEffect, useRef } from "react";
import { GlobalStyle, Wrap } from "./styles";
import SkillList from "../../components/skill/skillList/SkillList";
import SkillPub from "../../components/skill/skillPub/SkillPub";
import SkillLanguage from "../../components/skill/skillLanguage/SkillLanguage";
import SkillBar from "../../components/skill/skillBar/SkillBar";
import { gsap, ScrollTrigger } from "gsap/all";

const SkillsWrap = () => {
  const wrapRef = useRef(null);

  // useEffect(() => {
  //   const init = () => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     const sections = gsap.utils.toArray(".section");
  //     let scrollTween = gsap.to(sections, {
  //       xPercent: -100 * (sections.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: wrapRef.current,
  //         pin: true,
  //         scrub: 1,
  //         end: "+=3000",
  //       },
  //     });
  //   };
  //   init();
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Wrap ref={wrapRef}>
        <SkillBar />
        <SkillList className="section" />
        <SkillPub className="section" />
        <SkillLanguage className="section" />
      </Wrap>
    </>
  );
};

export default SkillsWrap;
