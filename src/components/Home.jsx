import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import useScrollAnimation from "../hooks/useScrollAnimation";
const Home = () => {
   useScrollAnimation();
  return (
    <div id="Home" className="scroll-mt-20 pt-10 flex flex-col items-center gap-6 bg-[#111020] min-h-screen ">
      <span data-animate="scaleUp" className="border border-gray-800 p-2 w-20 h-20 text-[#9937cb] font-bold rounded-full flex justify-center items-center text-2xl bg-slate-100">
        AD
      </span>
      <p data-animate="slideRight" className="mt-2 text-4xl font-bold text-[#47a0d7] ">Aditya Gadbail</p>

      <div data-animate="slideLeft" >
        <p className=" text-center text-[#e4630a]  text-2xl">
          Mern Stack Developer & UI/UX Designer
        </p>
        <p className="text-center text-[#e4630a]  text-2xl">
          And Backend developer
        </p>
      </div>
      <div data-animate="slideRight">
        <p className=" text-[#79828d] text-center text-xl ">
          From clean UI to robust APIs — I create
        </p>
        <p className="text-[#79828d] text-center text-xl ">
          end-to-end digital experiences
        </p>
      </div>
      <div data-animate="scaleUp"  className=" mt-5 gap-5 flex flex-col sm:flex-row ">
        <a href="#Projects" className="bg-gradient-to-r from-[#7b62ee] to-[#c3347e] text-white font-semibold text-sm p-3 rounded-full text-center  w-40 hover:text-[1.001rem] transition-all">
          View My work
        </a >

        <a href="#Contact" className="bg-white text-[#8b5cf6] font-semibold text-sm w-40 p-3 rounded-full border text-center border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all ">
          Get In Touch
        </a >
      </div>
      <p>
        <div data-animate="scaleUp" className="flex gap-5 mt-5">
        <div> 
          <a 
          href="https://github.com/AdityaGadbail"><FontAwesomeIcon  icon={faGithub} className="relative hover:-top-2 transition-all h-8 hover:text-red-500 hover:bg-slate-700 rounded-md p-1 w-8 text-slate-500" /></a>
          </div>
        <div> 
          <a 
          href="https://www.linkedin.com/in/adityagadbail"><FontAwesomeIcon  icon={faLinkedin} className="relative hover:-top-2 transition-all h-8 hover:text-sky-500 hover:bg-slate-700 rounded-md p-1 w-8 text-slate-500" /></a>
          </div>
        <div> 
          <a 
          href="mailto:adityagadbail003@gmail.com"><FontAwesomeIcon  icon={faEnvelope} className="relative hover:-top-2 transition-all h-8 hover:text-slate-200 hover:bg-slate-700 rounded-md p-1 w-8 text-slate-500" /></a>
          </div>
        
          </div>
      </p>
    </div>
  );
};

export default Home;
