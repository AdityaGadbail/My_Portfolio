import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div>
      <div className="bg-[#09090b] p-4 ">
        <hr />
        <p className="text-4xl text-center mt-7 text-[#e5e7eb] font-bold">
          Skills & Expertise
        </p>

        <div className="gap-10 flex flex-col sm:flex-row mt-10 pb-5 justify-center items-center">
          <div className="bg-black cursor-pointer w-52 h-44 flex flex-col gap-5 items-center rounded-3xl justify-center hover:scale-105 transition-all shadow-sm shadow-cyan-500 hover:shadow-md hover:shadow-cyan-500 ">
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="text-4xl text-blue-500"
            />
            <p className="text-white font-semibold">Frontend Development</p>
            <div className="text-[#797e85] flex gap-1">
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                REACT
              </span>
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                HTML
              </span>
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                CSS
              </span>
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                TAILWIND
              </span>
            </div>
          </div>

          <div className="bg-black cursor-pointer w-52 h-44 flex flex-col gap-5 items-center rounded-3xl justify-center hover:scale-105 transition-all shadow-sm shadow-cyan-500 hover:shadow-md hover:shadow-cyan-500 ">
            <FontAwesomeIcon
              icon={faServer}
              className="text-4xl text-blue-500"
            />
            <p className="text-white font-semibold">Backend Development</p>
            <div className="text-[#797e85] flex gap-1">
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                Javascript
              </span>
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                Nodejs
              </span>
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                Expressjs
              </span>
            </div>
          </div>

          <div className="bg-black cursor-pointer w-52 h-44 flex flex-col gap-5 items-center rounded-3xl justify-center hover:scale-105 transition-all shadow-sm shadow-cyan-500 hover:shadow-md hover:shadow-cyan-500 ">
            <FontAwesomeIcon
              icon={faDatabase}
              className="text-4xl text-blue-500"
            />
            <p className="text-white font-semibold">Database</p>
            <div className="text-[#797e85] flex gap-1">
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
               MongoDB
              </span>
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                Moongose
              </span>
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                Atlas
              </span>
            </div>
          </div>

          <div className="bg-black cursor-pointer w-52 h-44 flex flex-col gap-5 items-center rounded-3xl justify-center hover:scale-105 transition-all shadow-sm shadow-cyan-500 hover:shadow-md hover:shadow-cyan-500 ">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-4xl text-blue-500"
            />
            <p className="text-white font-semibold">Git & Github</p>
            <div className="text-[#797e85] flex gap-2">
               <span className=" text-xs bg-neutral-900 rounded-md p-1">Git</span>
               <span className=" text-xs bg-neutral-900 rounded-md p-1">Github</span>
           
            </div>
          </div>

          <div className="bg-black cursor-pointer w-52 h-44 flex flex-col gap-5 items-center rounded-3xl justify-center hover:scale-105 transition-all shadow-sm shadow-cyan-500 hover:shadow-md hover:shadow-cyan-500 ">
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              className="text-4xl text-blue-500"
            />
            <p className="text-white font-semibold">Tools</p>
            <div className="text-[#797e85] flex gap-1">
               <span className=" text-xs bg-neutral-900 rounded-md p-1">Vscode</span>
               <span className=" text-xs bg-neutral-900 rounded-md p-1">Postman</span>
               <span className=" text-xs bg-neutral-900 rounded-md p-1">Compass</span>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
