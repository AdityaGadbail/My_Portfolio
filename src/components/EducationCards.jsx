import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

/* PREVIOUS Education design (Skills-style cards) — swap App.jsx import to this file to restore */
const EducationCards = () => {
  return (
    <div>
      <div id="Education" className="bg-[#09090b] scroll-mt-20 p-4 ">
        <hr />
        <p
          data-animate="scaleUp"
          className="text-4xl text-center mt-7 text-[#e5e7eb] font-bold"
        >
          Education
        </p>

        <div
          data-animate="slideUp"
          className="gap-10 flex flex-col sm:flex-row mt-10 pb-5 justify-center items-center"
        >
          <div className="bg-black cursor-pointer w-52 h-52 flex flex-col gap-3 items-center rounded-3xl justify-center hover:scale-105 transition-all shadow-sm shadow-cyan-500 hover:shadow-md hover:shadow-cyan-500 p-3">
            <FontAwesomeIcon
              icon={faSchool}
              className="text-4xl text-blue-500"
            />
            <p className="text-white font-semibold">10th Grade</p>
            <p className="text-[#797e85] text-xs text-center">
              Your School Name
            </p>
            <div className="text-[#797e85] flex gap-1 flex-wrap justify-center">
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                Board
              </span>
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                Year
              </span>
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                %
              </span>
            </div>
          </div>

          <div className="bg-black cursor-pointer w-52 h-52 flex flex-col gap-3 items-center rounded-3xl justify-center hover:scale-105 transition-all shadow-sm shadow-cyan-500 hover:shadow-md hover:shadow-cyan-500 p-3">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-4xl text-blue-500"
            />
            <p className="text-white font-semibold">12th Grade</p>
            <p className="text-[#797e85] text-xs text-center">
              Your School / Junior College
            </p>
            <div className="text-[#797e85] flex gap-1 flex-wrap justify-center">
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                Board
              </span>
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                Year
              </span>
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                %
              </span>
            </div>
          </div>

          <div className="bg-black cursor-pointer w-52 h-52 flex flex-col gap-3 items-center rounded-3xl justify-center hover:scale-105 transition-all shadow-sm shadow-cyan-500 hover:shadow-md hover:shadow-cyan-500 p-3">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="text-4xl text-blue-500"
            />
            <p className="text-white font-semibold">Degree</p>
            <p className="text-[#797e85] text-xs text-center">
              Your College / University
            </p>
            <div className="text-[#797e85] flex gap-1 flex-wrap justify-center">
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                Course
              </span>
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                Year
              </span>
              <span className=" text-xs bg-neutral-900 rounded-md p-1">
                CGPA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCards;
