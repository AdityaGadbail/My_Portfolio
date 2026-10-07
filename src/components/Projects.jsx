import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const cardClass =
  "w-72 min-h-[420px] hover:scale-105 transition-all shadow-sm shadow-[#077a8e] p-3 bg-[#25242f] hover:shadow-xl hover:shadow-[#077a8e] rounded-lg flex flex-col gap-2";

const Projects = () => {
  return (
    <div id="Projects" className="bg-[#111020] scroll-mt-20 p-12">
      <div
        data-animate="scaleUp"
        className="text-4xl text-center text-[#5549db] pb-5 font-bold"
      >
        Featured Projects
      </div>

      <div
        data-animate="scaleUp"
        className="flex flex-col sm:flex-row flex-wrap items-stretch gap-10 justify-center mt-5"
      >
        <div className={cardClass}>
          <img
            className="rounded-md h-[176.18px] w-full object-cover shrink-0"
            src="/Images/SC 1.png"
            alt="SkillForgeJPG"
          />
          <p className="text-white text-center text-lg font-semibold shrink-0">
            SkillForge
          </p>
          <p className="text-[#7e8791] text-sm flex-1 min-h-[60px]">
            SkillForge is a SaaS platform helping creators build, sell, and
            manage their online courses easily.
          </p>
          <div className="text-[#feffff] flex gap-1 flex-wrap min-h-[52px] content-start">
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
          <div className="flex justify-center items-center gap-3 mt-auto">
            <a
              className="bg-white text-[#8b5cf6] font-semibold text-sm w-20 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2"
              href="https://github.com/AdityaGadbail/Saas-Course-Platform/"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <p className="text-sm">Code</p>
            </a>

            <a
              className="bg-white text-[#8b5cf6] font-semibold text-sm w-32 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2"
              href="https://skillforge-course.vercel.app/"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <span className="text-sm">Live Demo</span>
            </a>
          </div>
        </div>

        <div className={cardClass}>
          <div className="rounded-md h-[176.18px] w-full shrink-0 bg-gradient-to-br from-[#7b62ee] via-[#25242f] to-[#077a8e] flex flex-col items-center justify-center gap-2 p-4">
            <p className="text-white text-center font-bold text-lg leading-tight">
              AI Document Intelligence
            </p>
            <p className="text-[#c4b5fd] text-xs text-center">
              RAG · Gemini · FAISS
            </p>
          </div>
          <p className="text-white text-center text-lg font-semibold shrink-0">
            AI Doc Intelligence
          </p>
          <p className="text-[#7e8791] text-sm flex-1 min-h-[60px]">
            End-to-end RAG assistant for PDF upload, vector search, and
            conversational Q&A powered by Google Gemini.
          </p>
          <div className="text-[#feffff] flex gap-1 flex-wrap min-h-[52px] content-start">
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              Streamlit
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              Python
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              Gemini
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              FAISS
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              LangChain
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              SQLite
            </span>
          </div>
          <div className="flex justify-center items-center gap-3 mt-auto">
            <a
              className="bg-white text-[#8b5cf6] font-semibold text-sm w-20 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2"
              href="https://github.com/AdityaGadbail/AI-Document-Intelligence-Assistant"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <p className="text-sm">Code</p>
            </a>

            <a
              className="bg-white text-[#8b5cf6] font-semibold text-sm w-32 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2"
              href="https://github.com/AdityaGadbail/AI-Document-Intelligence-Assistant"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <span className="text-sm">View Repo</span>
            </a>
          </div>
        </div>

        <div className={cardClass}>
          <img
            className="rounded-md h-[176.18px] w-full object-cover shrink-0"
            src="/Images/MERNAUTH.jpg"
            alt="MernAuth"
          />
          <p className="text-white text-center text-lg font-semibold shrink-0">
            Mern-Auth System
          </p>
          <p className="text-[#7e8791] text-sm flex-1 min-h-[60px]">
            A secure MERN authentication system with JWT, bcrypt, and role-based
            access control for users.
          </p>
          <div className="text-[#feffff] flex gap-1 flex-wrap min-h-[52px] content-start">
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
          <div className="flex justify-center items-center gap-3 mt-auto">
            <a
              className="bg-white text-[#8b5cf6] font-semibold text-sm w-20 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2"
              href="https://github.com/AdityaGadbail/MERN-AUTHENTICATION-SYSTEM-USING-JWT-AND-HTTP-ONLY-COOKIE"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <p className="text-sm">Code</p>
            </a>

            <a
              className="bg-white text-[#8b5cf6] font-semibold text-sm w-32 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2"
              href="https://mern-authentication-system-jw.vercel.app/"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <span className="text-sm">Live Demo</span>
            </a>
          </div>
        </div>

        <div className={cardClass}>
          <img
            className="rounded-md h-[176.18px] w-full object-cover shrink-0"
            src="/Images/CoffeeAndToffee.png"
            alt="CoffeeAndToffee"
          />
          <p className="text-white text-center text-lg font-semibold shrink-0">
            CoffeeAndToffee
          </p>
          <p className="text-[#7e8791] text-sm flex-1 min-h-[60px]">
            A creator monetization and community engagement platform built with
            Node/Express and React.
          </p>
          <div className="text-[#feffff] flex gap-1 flex-wrap min-h-[52px] content-start">
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
            <span className=" text-xs bg-neutral-900 rounded-md p-1">JWT</span>
          </div>
          <div className="flex justify-center items-center gap-3 mt-auto">
            <a
              className="bg-white text-[#8b5cf6] font-semibold text-sm w-20 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2"
              href="https://github.com/AdityaGadbail/CoffeeAndToffee"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <p className="text-sm">Code</p>
            </a>

            <a
              className="bg-white text-[#8b5cf6] font-semibold text-sm w-32 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2"
              href="https://coffee-and-toffee-three.vercel.app/"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <span className="text-sm">Live Demo</span>
            </a>
          </div>
        </div>

        <div className={cardClass}>
          <img
            className="rounded-md h-[176.18px] w-full object-cover shrink-0"
            src="/Images/Spotify.png"
            alt="Spotify"
          />
          <p className="text-white text-center text-lg font-semibold shrink-0">
            Spotify Home Page
          </p>
          <p className="text-[#7e8791] text-sm flex-1 min-h-[60px]">
            Responsive Spotify landing page clone built with pure HTML and CSS,
            featuring sidebar navigation, content cards.
          </p>
          <div className="text-[#feffff] flex gap-1 flex-wrap min-h-[52px] content-start">
            <span className=" text-xs bg-neutral-900 rounded-md p-1">
              HTML:5
            </span>
            <span className=" text-xs bg-neutral-900 rounded-md p-1">CSS</span>
          </div>
          <div className="flex justify-center items-center gap-3 mt-auto">
            <a
              className="bg-white text-[#8b5cf6] font-semibold text-sm w-20 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2"
              href="https://github.com/AdityaGadbail/Spotify-LandingPage"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <p className="text-sm">Code</p>
            </a>

            <a
              className="bg-white text-[#8b5cf6] font-semibold text-sm w-32 p-1 rounded-md border border-[#8b5cf6] hover:text-white hover:bg-[#8b5cf6] transition-all flex items-center justify-center gap-1 mt-2"
              href="https://spotify-landing-page-beta.vercel.app/"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className=" h-4 w-4 bg-white rounded-md p-1 text-slate-500"
              />
              <span className="text-sm">Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
