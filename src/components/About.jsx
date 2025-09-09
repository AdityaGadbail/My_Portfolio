import React from "react";

const About = () => {
  return (
    <div id="About" className="bg-[#09090b] scroll-mt-20
 p-4 ">
      <div className="text-center mt-8">
        <span className="text-center  text-4xl font-semibold text-[#e5e7eb] cursor-pointer rounded-full hover:bg-[#0f0f15]">
          About Me
        </span>
      </div>

      <div className="sm:flex-row max-w-[100vw] items-center justify-center flex flex-col">
        <div className="text-white  sm:flex-row max-w-[70vw] items-center justify-around flex flex-col gap-4 mt-7">
          <div className="sm:w-1/2  text-[#78818c] ">
            <p className="text-2xl text-[#d8e0e9] text-center ">
              Passionate Developer, Eager to Build and Learn Every Day
            </p>
            <p className="text-justify mt-8 ">
              I'm a passionate developer focused on building real-world projects
              using JavaScript, React, Node.js, Express, and MongoDB. I enjoy
              writing clean, scalable code and creating applications that solve
              real problems. Always learning and exploring new technologies and
              AI tools like Canva, I aim to grow as a versatile developer and
              deliver projects that make an impact while enhancing my skills.
            </p>
          </div>
          <div className="">
           <img className="rounded-full"class="h-72 w-72 object-cover rounded-full" src="src\assets\myImg.png" alt="AdityaImg" height={90} width={300}/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
