import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const linkClass =
    "cursor-pointer hover:text-purple-600 hover:bg-gray-800 sm:p-3 rounded-2xl";
  const mobileLinkClass =
    "block cursor-pointer hover:text-purple-600 hover:bg-gray-800 p-3 rounded-2xl";

  return (
    <div className="bg-[#0f0f11] p-3 text-white sticky top-0 z-50 w-full shadow-lg shadow-cyan-500">
      <div className="flex items-center justify-between">
        <div
          data-animate="slideUp"
          className="text-[#8f63d2] font-bold text-3xl"
        >
          <a href="#Home" onClick={closeMenu}>
            Portfolio
          </a>
        </div>

        {/* Desktop links */}
        <div className="mr-2 hidden sm:block">
          <ul
            data-animate="slideUp"
            className="flex items-center justify-between gap-3 sm:gap-5"
          >
            <li>
              <a className={linkClass} href="#About">
                About
              </a>
            </li>
            <li>
              <a className={linkClass} href="#Skills">
                Skills
              </a>
            </li>
            <li>
              <a className={linkClass} href="#Education">
                Education
              </a>
            </li>
            <li>
              <a className={linkClass} href="#Projects">
                Projects
              </a>
            </li>
            <li>
              <a className={linkClass} href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden mr-2 p-2 rounded-md hover:bg-gray-800 transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-xl text-[#8f63d2]"
          />
        </button>
      </div>

      {/* Mobile collapsible menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 pb-2">
          <li>
            <a className={mobileLinkClass} href="#About" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a className={mobileLinkClass} href="#Skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a
              className={mobileLinkClass}
              href="#Education"
              onClick={closeMenu}
            >
              Education
            </a>
          </li>
          <li>
            <a
              className={mobileLinkClass}
              href="#Projects"
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a className={mobileLinkClass} href="#Contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
