import React, { useEffect, useRef } from "react";
import { Wrap } from "./style";
import AboutMain from "../../components/about/aboutMain/AboutMain";
import AboutInterest from "../../components/about/aboutInterest/AboutInterest";
import AboutServices from "../../components/about/aboutServices/AboutServices";
import LocomotiveScroll from "locomotive-scroll";
import { gsap, ScrollTrigger } from "gsap/all";
// import "../../styles/locomotive-scroll.css";

const AboutWrap = () => {
  const containerRef = useRef(null);
  const aboutMainRef = useRef(null);
  const aboutInterestRef = useRef(null);
  const aboutServicesRef = useRef(null);
  const imgRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  //locomotive setting
  // useEffect(() => {
  //   const locoScroll = new LocomotiveScroll({
  //     el: containerRef.current,
  //     smooth: true,
  //   });

  //   locoScroll.on("scroll", ScrollTrigger.update);

  //   ScrollTrigger.scrollerProxy(containerRef.current, {
  //     scrollTop(value) {
  //       return arguments.length
  //         ? locoScroll.scrollTo(value, 0, 0)
  //         : locoScroll.scroll.instance.scroll.y;
  //     },
  //     getBoundingClientRect() {
  //       return {
  //         top: 0,
  //         left: 0,
  //         width: window.innerWidth,
  //         height: window.innerHeight,
  //       };
  //     },

  //     pinType: containerRef.current.style.transform ? "transform" : "fixed",
  //   });

  //   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  //   ScrollTrigger.refresh();

  //   return () => {
  //     locoScroll.destroy(); // Destroy the LocomotiveScroll instance
  //     ScrollTrigger.getAll().forEach((st) => st.kill()); // Kill all active ScrollTriggers
  //   };
  // }, []);

  useEffect(() => {
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

      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

      ScrollTrigger.refresh();

      return () => {
        locoScroll.destroy(); // Destroy the LocomotiveScroll instance
        ScrollTrigger.getAll().forEach((st) => st.kill()); // Kill all active ScrollTriggers
      };
    }, 100); // Waiting 100ms before initializing
  }, []);

  //GSAP
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      let ctx = gsap.context(() => {
        gsap.set(aboutServicesRef.current, { x: 2000 });
        gsap.set(aboutInterestRef.current, { x: -2000 });

        let tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: aboutMainRef.current,
            start: "35% top",
            end: "bottom top",
            scrub: true,
            // markers: true,
            scroller: containerRef.current,
          },
        });

        tl1.to(aboutServicesRef.current, {
          x: 0,
          duration: 3,
        });

        let tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: aboutServicesRef.current,
            start: "35% top",
            end: "bottom top",
            scrub: true,
            // markers: true,
            scroller: containerRef.current,
          },
        });

        tl2.to(aboutInterestRef.current, {
          x: 0,
          duration: 3,
        });

        gsap.to(".skillContainer ul li", {
          duration: 1,
          opacity: 1.5,
          x: 0,
          ease: "power3.inOut",
          delay: 0.65,
          stagger: 0.25,
        });

        gsap.to(imgRef.current, {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power3.inOut",
        });
      });

      return () => ctx.revert();
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Wrap>
      <div ref={containerRef} className="containerWrap">
        <AboutMain imgRef={imgRef} ref={aboutMainRef} />
        <AboutServices ref={aboutServicesRef} />
        <AboutInterest ref={aboutInterestRef} />
      </div>
    </Wrap>
  );
};

export default AboutWrap;
