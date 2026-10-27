import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBookOpen,
  faSchool,
  faBuildingColumns,
  faLocationDot,
  faCalendarDays,
  faTrophy,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const educationData = [
  {
    number: "01",
    title: "B.Tech (CSE)",
    subtitle: "Computer Science & Engineering",
    institution:
      "Tulsiramji Gaikwad Patil College of Engineering and Technology (TGPCET)",
    location: "Nagpur",
    duration: "2022 — 2026",
    score: "8.72",
    scoreSuffix: "/ 10",
    scoreLabel: "CGPA",
    badge: "DEGREE",
    icon: faGraduationCap,
    scoreIcon: faTrophy,
    accent: "#8b5cf6",
    gradient: "linear-gradient(110deg, #7357ff, #ae38e8)",
  },
  {
    number: "02",
    title: "12th Grade",
    subtitle: "Higher Secondary Certificate",
    institution: "Subodh High School",
    location: "Achalpur",
    duration: "2020 — 2022",
    score: "63%",
    scoreSuffix: "",
    scoreLabel: "Percentage",
    badge: "12TH",
    icon: faBookOpen,
    scoreIcon: faChartLine,
    accent: "#22c9fa",
    gradient: "linear-gradient(110deg, #19b6e6, #29d3fa)",
  },
  {
    number: "03",
    title: "10th Grade",
    subtitle: "Secondary School Certificate",
    institution: "Subodh High School",
    location: "Achalpur",
    duration: "2019 — 2020",
    score: "88.40%",
    scoreSuffix: "",
    scoreLabel: "Percentage",
    badge: "10TH",
    icon: faSchool,
    scoreIcon: faChartLine,
    accent: "#f15caa",
    gradient: "linear-gradient(110deg, #fb755f, #e43baf)",
  },
];

const EducationCard = ({ item }) => {
  return (
    <article
      className="education-card group relative flex h-full flex-col rounded-2xl p-[1.5px] transition-transform duration-300 hover:-translate-y-2"
      style={{
        "--accent": item.accent,
        background: item.gradient,
      }}
    >
      {/* Main card */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-[15px] bg-[#25242f] p-5">
        {/* Atmospheric glow */}
        <div
          className="pointer-events-none absolute -right-16 top-10 h-44 w-44 rounded-full opacity-[0.09] blur-[60px]"
          style={{ backgroundColor: item.accent }}
        />

        {/* Top row */}
        <div className="relative z-10 mb-4 flex items-center justify-between">
          <span className="text-xl font-bold text-[#555c79]">
            {item.number}
          </span>

          <span
            className="rounded-full border px-3 py-1 text-[11px] font-bold tracking-wide"
            style={{
              color: item.accent,
              borderColor: `${item.accent}60`,
              backgroundColor: `${item.accent}12`,
            }}
          >
            {item.badge}
          </span>
        </div>

        {/* Title */}
        <div className="relative z-10 mb-4">
          <h3 className="text-lg font-semibold leading-tight text-white">
            {item.title}
          </h3>

          <p
            className="mt-1 text-sm font-semibold"
            style={{ color: item.accent }}
          >
            {item.subtitle}
          </p>
        </div>

        {/* Institution */}
        <div className="relative z-10 mb-3 flex gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] p-3">
          <FontAwesomeIcon
            icon={faBuildingColumns}
            className="mt-1 text-base"
            style={{ color: item.accent }}
          />

          <div className="min-w-0">
            <p className="mb-1 text-xs text-[#929bb8]">Institution</p>

            <p className="text-sm leading-snug text-[#f0f2ff]">
              {item.institution}
            </p>

            <div className="mt-1.5 flex items-center gap-2 text-xs text-[#929bb8]">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[10px] text-cyan-400"
              />
              {item.location}
            </div>
          </div>
        </div>

        {/* Bottom statistics */}
        <div className="relative z-10 mt-auto grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.025] p-2.5">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="text-sm"
              style={{ color: item.accent }}
            />

            <div>
              <p className="mb-1 text-[11px] text-[#929bb8]">Duration</p>
              <p className="whitespace-nowrap text-[13px] font-semibold text-white">
                {item.duration}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.025] p-2.5">
            <FontAwesomeIcon
              icon={item.scoreIcon}
              className="text-sm"
              style={{ color: item.accent }}
            />

            <div>
              <p className="mb-1 text-[11px] text-[#929bb8]">
                {item.scoreLabel}
              </p>

              <p
                className="whitespace-nowrap text-base font-bold"
                style={{ color: item.accent }}
              >
                {item.score}
                <span className="ml-1 text-[10px] font-normal text-[#929bb8]">
                  {item.scoreSuffix}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Education = () => {
  return (
    <section
      id="Education"
      className="education-section relative isolate scroll-mt-20 overflow-hidden bg-[#111020] p-4 text-white sm:p-12"
    >
      {/* Background grid */}
      <div className="education-grid pointer-events-none absolute inset-0 opacity-30" />

      {/* Header */}
      <div data-animate="scaleUp" className="relative z-10 mx-auto mb-10 text-center">
        <h2 className="education-gradient-text text-4xl font-bold">
          Education
        </h2>

        <p className="mt-3 text-sm text-[#7e8791]">
          Academic journey shaping my foundation in tech
        </p>
      </div>

      {/* Timeline and cards */}
      <div className="relative z-10 mx-auto max-w-[1040px]">
        {/* Horizontal connecting line */}
        <div className="absolute left-[16.66%] right-[16.66%] top-0 hidden border-t border-dashed border-violet-500/60 lg:block" />

        <div
          data-animate="slideUp"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {educationData.map((item) => (
            <div key={item.number} className="relative pt-7">
              {/* Timeline marker */}
              <div
                className="absolute left-1/2 top-0 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-[#111020] lg:flex"
                style={{
                  borderColor: item.accent,
                  boxShadow: `0 0 16px ${item.accent}40`,
                }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-lg"
                  style={{ color: item.accent }}
                />
              </div>

              <EducationCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-gradient-text {
          background: linear-gradient(
            100deg,
            #ffffff 10%,
            #5c9dff 40%,
            #9b5cf6 65%,
            #f06aab 90%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .education-grid {
          background-image:
            linear-gradient(
              rgba(110, 110, 180, 0.07) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(110, 110, 180, 0.07) 1px,
              transparent 1px
            );
          background-size: 90px 90px;
        }

        .education-card {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
        }

        .education-card:hover {
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.25),
            0 0 22px color-mix(
              in srgb,
              var(--accent) 20%,
              transparent
            );
        }

        @media (prefers-reduced-motion: reduce) {
          .education-card {
            transition: none;
          }
          .education-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
