import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <div id="Education" className="bg-[#111020] scroll-mt-20 p-12">
      <div data-animate="scaleUp" className="text-center pb-2">
        <p className="text-4xl font-bold text-[#5549db]">Education</p>
        <p className="text-[#7e8791] mt-3 text-sm">
          Academic journey shaping my foundation in tech
        </p>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#7b62ee] to-[#c3347e]"></div>
      </div>

      <div
        data-animate="slideUp"
        className="flex flex-col sm:flex-row items-stretch gap-8 justify-center mt-12"
      >
        {/* Degree */}
        <div className="relative w-72 sm:w-80 hover:scale-105 transition-all shadow-sm shadow-[#077a8e] hover:shadow-xl hover:shadow-[#077a8e] rounded-lg bg-[#25242f] overflow-hidden flex flex-col cursor-pointer">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#7b62ee] to-[#c3347e]"></div>
          <div className="p-5 flex flex-col gap-4 flex-1">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-[#111020] border border-cyan-500 flex items-center justify-center shadow-sm shadow-cyan-500">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-xl text-blue-500"
                />
              </div>
              <span className="text-xs font-semibold text-[#8b5cf6] bg-neutral-900 rounded-md px-2 py-1">
                DEGREE
              </span>
            </div>

            <div>
              <p className="text-white text-xl font-semibold">B.Tech (CSE)</p>
              <p className="text-[#8b5cf6] text-sm font-semibold mt-1">
                Computer Science & Engineering
              </p>
            </div>

            <div className="flex flex-col gap-2.5 text-sm">
              <div className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-cyan-500 mt-0.5 w-3.5"
                />
                <div>
                  <p className="text-[#9ca3af] text-xs">Institution</p>
                  <p className="text-[#e5e7eb] leading-snug">
                    Tulsiramji Gaikwad Patil College of Engineering and
                    Technology (TGPCET)
                  </p>
                  <p className="text-[#7e8791] text-xs mt-0.5">Nagpur</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-cyan-500 mt-0.5 w-3.5"
                />
                <div>
                  <p className="text-[#9ca3af] text-xs">Duration</p>
                  <p className="text-[#e5e7eb]">2022 — 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faAward}
                  className="text-cyan-500 mt-0.5 w-3.5"
                />
                <div>
                  <p className="text-[#9ca3af] text-xs">Performance</p>
                  <p className="text-[#8b5cf6] font-bold text-base">8.72 CGPA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 12th */}
        <div className="relative w-72 sm:w-80 hover:scale-105 transition-all shadow-sm shadow-[#077a8e] hover:shadow-xl hover:shadow-[#077a8e] rounded-lg bg-[#25242f] overflow-hidden flex flex-col cursor-pointer">
          <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 to-[#077a8e]"></div>
          <div className="p-5 flex flex-col gap-4 flex-1">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-[#111020] border border-cyan-500 flex items-center justify-center shadow-sm shadow-cyan-500">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="text-xl text-blue-500"
                />
              </div>
              <span className="text-xs font-semibold text-[#47a0d7] bg-neutral-900 rounded-md px-2 py-1">
                12TH
              </span>
            </div>

            <div>
              <p className="text-white text-xl font-semibold">12th Grade</p>
              <p className="text-[#8b5cf6] text-sm font-semibold mt-1">
                Higher Secondary Certificate
              </p>
            </div>

            <div className="flex flex-col gap-2.5 text-sm">
              <div className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-cyan-500 mt-0.5 w-3.5"
                />
                <div>
                  <p className="text-[#9ca3af] text-xs">Institution</p>
                  <p className="text-[#e5e7eb] leading-snug">
                    Subodh High School
                  </p>
                  <p className="text-[#7e8791] text-xs mt-0.5">Achalpur</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-cyan-500 mt-0.5 w-3.5"
                />
                <div>
                  <p className="text-[#9ca3af] text-xs">Duration</p>
                  <p className="text-[#e5e7eb]">2020 — 2022</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faAward}
                  className="text-cyan-500 mt-0.5 w-3.5"
                />
                <div>
                  <p className="text-[#9ca3af] text-xs">Performance</p>
                  <p className="text-[#8b5cf6] font-bold text-base">
                    63%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10th */}
        <div className="relative w-72 sm:w-80 hover:scale-105 transition-all shadow-sm shadow-[#077a8e] hover:shadow-xl hover:shadow-[#077a8e] rounded-lg bg-[#25242f] overflow-hidden flex flex-col cursor-pointer">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#47a0d7] to-[#8f63d2]"></div>
          <div className="p-5 flex flex-col gap-4 flex-1">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-[#111020] border border-cyan-500 flex items-center justify-center shadow-sm shadow-cyan-500">
                <FontAwesomeIcon
                  icon={faSchool}
                  className="text-xl text-blue-500"
                />
              </div>
              <span className="text-xs font-semibold text-[#e4630a] bg-neutral-900 rounded-md px-2 py-1">
                10TH
              </span>
            </div>

            <div>
              <p className="text-white text-xl font-semibold">10th Grade</p>
              <p className="text-[#8b5cf6] text-sm font-semibold mt-1">
                Secondary School Certificate
              </p>
            </div>

            <div className="flex flex-col gap-2.5 text-sm">
              <div className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-cyan-500 mt-0.5 w-3.5"
                />
                <div>
                  <p className="text-[#9ca3af] text-xs">Institution</p>
                  <p className="text-[#e5e7eb] leading-snug">
                    Subodh High School
                  </p>
                  <p className="text-[#7e8791] text-xs mt-0.5">Achalpur</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-cyan-500 mt-0.5 w-3.5"
                />
                <div>
                  <p className="text-[#9ca3af] text-xs">Duration</p>
                  <p className="text-[#e5e7eb]">2019 — 2020</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faAward}
                  className="text-cyan-500 mt-0.5 w-3.5"
                />
                <div>
                  <p className="text-[#9ca3af] text-xs">Performance</p>
                  <p className="text-[#8b5cf6] font-bold text-base">88.40%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
