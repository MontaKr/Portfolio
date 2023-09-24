import React, { useEffect, useRef } from "react";
import { Wrap } from "./style";
import AboutMain from "../../components/about/aboutMain/AboutMain";
import AboutInterest from "../../components/about/aboutInterest/AboutInterest";
import AboutServices from "../../components/about/aboutServices/AboutServices";
import LocomotiveScroll from "locomotive-scroll";
import { gsap, ScrollTrigger } from "gsap/all";
import "../../styles/locomotive-scroll.css";

const AboutWrap = () => {
  const containerRef = useRef(null);
  const aboutMainRef = useRef(null);
  const aboutInterestRef = useRef(null);
  const aboutServices = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial transform values for targeted elements
    gsap.set(
      [aboutMainRef.current, aboutInterestRef.current, aboutServices.current],
      { x: 0 }
    );

    // Initialize Locomotive Scroll with a slight delay
    setTimeout(() => {
      const locoScroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
      });

      locoScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(containerRef.current, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: containerRef.current.style.transform ? "transform" : "fixed",
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutMainRef.current,
          start: "25% top",
          end: "75% top",
          scrub: true,
          markers: true,
          scroller: containerRef.current,
        },
      });

      gsap.set(aboutInterestRef.current, { x: 2000 });
      tl.to(aboutInterestRef.current, {
        x: 0,
        duration: 3,
      });

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: aboutInterestRef.current,
          start: "25% top",
          end: "75% top",
          scrub: true,
          markers: true,
          scroller: containerRef.current,
        },
      });

      gsap.set(aboutServices.current, { x: -2000 });
      tl2.to(aboutServices.current, {
        x: 0,
        duration: 3,
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <Wrap>
      <div ref={containerRef} className="containerWrap">
        <AboutMain ref={aboutMainRef} />
        <AboutInterest ref={aboutInterestRef} />
        <AboutServices ref={aboutServices} />
      </div>
    </Wrap>
  );
};

export default AboutWrap;
