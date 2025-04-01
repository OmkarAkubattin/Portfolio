import React, { useEffect, useRef } from "react";
import bgOverlay from "../assets/rb_5729.png";
import pen from "../assets/pen2.png";
import gsap from "gsap";
import "./Section1.css";


const Layout = () => {
  const portfolitRef = useRef(null);
  const penRef = useRef(null);
  const nameRef = useRef(null);
  useEffect(() => {
    gsap.from(portfolitRef.current, {
      x: "100%",
      duration: 5,
      ease: "power2.out",
    });
    gsap.to(portfolitRef.current, {
      x: "0%",
      duration: 5,
      ease: "power2.out",
    });
    gsap.to(nameRef.current, {
      opacity: 1,
      duration: 5,
      ease: "power2.out",
    });
  });
  return (
    <div className="relative h-screen w-screen bg-black">
      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-blend-hard-light opacity-5 pointer-events-none"
        style={{ backgroundImage: `url(${bgOverlay})` }}
      ></div>

      {/* Content */}
      <div className="relative flex justify-center items-center h-full text-white">
        <p ref={nameRef} className="absolute left-20 top-63 text-xl opacity-0">
          Omkar <span className="opacity-50">Akubattin,</span>
        </p>
        <h1
          ref={portfolitRef}
          className="text-[15rem] font-extrabold mb-15 bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ff9922, #100505, #ff9922, #100505)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          PORTFOLIO
          <img
            ref={penRef}
            className="absolute top-40.5 -right-10 w-224"
            src={pen}
            alt=""
          />
        </h1>
        {/* <div className="absolute w-80 h-80 bg-orange-400 rounded-full -top-20 -right-30 blur-[7rem] backdrop-blur-[7rem"></div> */}
      </div>
    </div>
  );
};

export default Layout;
