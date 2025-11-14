import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div id="Projects" className="bg-[#111020] scroll-mt-20 p-12">
      <div data-animate="scaleUp" className="text-4xl text-center text-[#5549db] pb-5 font-bold">
        Featured Projects
      </div>

      <div data-animate="scaleUp" className="flex flex-col sm:flex-row items-center gap-10 justify-center mt-5">
        <div
          className="w-72 hover:scale-105 transition-all shadow-sm shadow-[#077a8e] h-auto p-3 bg-[#25242f] hover:shadow-xl 
        hover:shadow-[#077a8e]  rounded-lg flex flex-col gap-2"
        >
          <img
            className="rounded-md h-[176.18px]"
            src="/Images/SC 1.png"
            alt="SkillForgeJPG"
           
          />
          <p className="text-white text-center text-lg font-semibold">
            SkillForge
          </p>
          <p className="text-[#7e8791]">
           SkillForge is a SaaS platform helping creators build, sell, and manage their online courses easily.
          </p>
          <div className="text-[#feffff] flex gap-1 flex-wrap">
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              React
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              Tailwind
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              ExpressJs
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              MongoDB
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              Cloudinary
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              Razorpay
            </span>
          </div>
          <div className="flex justify-center items-center gap-3">
            <a className="bg-white text-[#8b5cf6] font-semibold text-sm w-20 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2" href="/">
              <FontAwesomeIcon
                icon={faGithub}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <a href="https://skillforge-course.vercel.app/" className="text-sm">Code</a>
            </a>

            <a className="bg-white text-[#8b5cf6] font-semibold text-sm w-32 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2" href="/">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <a href="https://skillforge-course.vercel.app/" className="text-sm">Live Demo</a>
            </a>
          </div>
        </div>

        <div
          className="w-72 hover:scale-105 transition-all shadow-sm shadow-[#077a8e] h-auto p-3 bg-[#25242f] hover:shadow-xl 
        hover:shadow-[#077a8e]  rounded-lg flex flex-col gap-2"
        >
          <img
            className="rounded-md h-[176.18px]"
            src="/Images/MERNAUTH.jpg"
            alt="SkillForgeJPG"
          
          />
          <p className="text-white text-center text-lg font-semibold">
            Mern-Auth System
          </p>
          <p className="text-[#7e8791]">
            A secure MERN authentication system with JWT, bcrypt, and role-based access control for users.
          </p>
          <div className="text-[#feffff] flex gap-1 flex-wrap">
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              React
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              Tailwind
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              ExpressJs
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              MongoDB
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              Nodemailer
            </span>
          </div>
          <div className="flex justify-center items-center gap-3">
            <a className="bg-white text-[#8b5cf6] font-semibold text-sm w-20 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2" href="https://github.com/AdityaGadbail/MERN-AUTHENTICATION-SYSTEM-USING-JWT-AND-HTTP-ONLY-COOKIE">
              <FontAwesomeIcon
                icon={faGithub}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <p className="text-sm">Code</p>
            </a>

            <a className="bg-white text-[#8b5cf6] font-semibold text-sm w-32 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2" href="/demo">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <p className="text-sm">Live Demo</p>
            </a>
          </div>
        </div>

         <div
          className="w-72 hover:scale-105 transition-all shadow-sm shadow-[#077a8e] h-auto p-3 bg-[#25242f] hover:shadow-xl 
        hover:shadow-[#077a8e]  rounded-lg flex flex-col gap-2"
        >
          <img
            className="rounded-md h-[176.18px]"
            src="/Images/MERNAUTH.jpg"
            alt="SkillForgeJPG"
          
          />
          <p className="text-white text-center text-lg font-semibold">
            Mern-Auth System
          </p>
          <p className="text-[#7e8791]">
            A secure MERN authentication system with JWT, bcrypt, and role-based access control for users.
          </p>
          <div className="text-[#feffff] flex gap-1 flex-wrap">
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              React
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              Tailwind
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              ExpressJs
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              MongoDB
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              Nodemailer
            </span>
          </div>
          <div className="flex justify-center items-center gap-3">
            <a className="bg-white text-[#8b5cf6] font-semibold text-sm w-20 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2" href="https://github.com/AdityaGadbail/MERN-AUTHENTICATION-SYSTEM-USING-JWT-AND-HTTP-ONLY-COOKIE">
              <FontAwesomeIcon
                icon={faGithub}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <p className="text-sm">Code</p>
            </a>

            <a className="bg-white text-[#8b5cf6] font-semibold text-sm w-32 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2" href="/demo">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <p className="text-sm">Live Demo</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
