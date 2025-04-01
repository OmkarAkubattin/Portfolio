import {useRef, useEffect} from "react";
import bgOverlay from "../assets/rb_5729.png";
import omkar from "../assets/omkar.png"
import gsap from "gsap";

const Section2 = () => {
  const omkarRef = useRef(null);
  useEffect(() => {
    gsap.from(omkarRef.current, {
      opacity: 0,
      duration: 5,
      ease: "power2.out",
    })
    gsap.to(omkarRef.current, {
      opacity: 1,
      duration: 5,
      ease: "power2.out",
    })
  },[omkarRef])
  return (
    <div className="relative h-screen w-screen bg-white">
      {/* Noise Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-blend-hard-light opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${bgOverlay})` }}
      ></div>
      <div className="relative">
        <h1 className="text-[13rem] absolute top-30 left-10" style={{ fontFamily: 'MyFont' }}>Hello,</h1>
        <h3 className="text-5xl absolute top-35 left-140 font-extrabold">I’M PASSIONATE<br/><span className="text-orange-400">GRAPHIC</span> DESIGNER <br/>& <span className="text-orange-400">FULL-STACK</span><br/>DEVELOPER</h3>
        <h5 className="text-4xl absolute top-103 left-13 font-extrabold">{`with a love for creating stunning digital experiences.`.toUpperCase()}</h5>
        <img ref={omkarRef} className="absolute w-140 right-0 top-11" src={omkar} alt="" />
      </div>
    </div>
  );
};

export default Section2;
