import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-[#0f0f11] p-3  text-white flex items-center justify-between sticky top-0 z-50 w-full shadow-lg shadow-cyan-500">
      <div data-animate="slideUp" className=" text-[#8f63d2]  font-bold text-3xl">
        <a href="#Home">Portfolio</a>
      </div>
      <div className="mr-2">
        <ul data-animate="slideUp" className="flex items-center justify-between gap-5 sm:gap-7 ">
          <li>
            <a
              className="cursor-pointer hover:text-purple-600 hover:bg-gray-800 sm:p-3 rounded-2xl"
              href="#About"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer hover:text-purple-600 hover:bg-gray-800 sm:p-3 rounded-2xl"
              href="#Projects"
            >
              Projects
            </a>
          </li>
          <li >
            <a
              className=" cursor-pointer hover:text-purple-600 hover:bg-gray-800 sm:p-3 rounded-2xl"
              href="#Contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
