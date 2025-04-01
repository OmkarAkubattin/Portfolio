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
      <div ref={omkarRef} className="relative">
        <h1 className="text-[13rem] absolute top-25 left-10" style={{ fontFamily: 'MyFont' }}>Hey! there,</h1>
        <h3 className="text-5xl absolute top-100 left-20 font-extrabold">I’M PASSIONATE <span className="text-orange-400">GRAPHIC DESIGNER</span><br/>AND <span className="text-orange-400">FULL-STACK DEVELOPER</span></h3>
        <h5 className="text-2xl absolute top-130 left-20 font-light">From crafting pixel-perfect designs to developing high-performance websites,<br/>I merge <b>creativity with technology</b> to build solutions that inspire.</h5>
        <h5 className="text-2xl absolute top-150 left-20 font-light">When I’m not coding or designing, you’ll find me in the <b>gym</b> or exploring<br/><b>new design trends.</b></h5>
        <img className="absolute w-140 right-0 top-11" src={omkar} alt="" />
      </div>
    </div>
  );
};

export default Section2;
