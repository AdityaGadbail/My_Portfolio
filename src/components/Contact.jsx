import React from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwpnwzkd");
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for joining!");
    }
  }, [state.succeeded]);
  return (
    <div id="Contact" className="bg-[#09090b]  p-10">
      <div className="text-center  text-4xl font-semibold text-[#5549db] cursor-pointer roun ded-full ">
        Get In Touch
      </div>
      <div className="flex flex-col sm:flex-row gap-5 justify-center  p-5 mt-5 ">
        <div className="sm:max-w-[30vw]">
          <p className="text-slate-50 text-2xl font-semibold">
            Let's work together
          </p>
          <p className="text-slate-50  text-wrap mt-5">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex items-center gap-4">
              <a href="mailto:adityagadbail003@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="relative hover:-top-2 transition-all h-8 hover:text-slate-200 hover:bg-slate-700 rounded-md p-1 w-8 text-slate-500"
                />
              </a>
              <p className="text-[#78818c]">adityagadbail003@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/AdityaGadbail">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="relative hover:-top-2 transition-all h-8 hover:text-red-500 hover:bg-slate-700 rounded-md p-1 w-8 text-slate-500"
                />
              </a>
              <p className="text-[#78818c]">github.com/AdityaGadbail</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/adityagadbail">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="relative hover:-top-2 transition-all h-8 hover:text-sky-500 hover:bg-slate-700 rounded-md p-1 w-8 text-slate-500"
                />
              </a>
              <p className="text-[#78818c]">linkedin.com/in/adityagadbail</p>
            </div>
          </div>
        </div>
        <div className="sm:max-w-[30vw] flex flex-col gap-5 p-6 bg-[#35353f] rounded-lg">
          <div className="text-3xl font-semibold text-slate-50">
            Send me a message
          </div>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="text-white flex flex-col gap-1">
              <label htmlFor="email">Email Address</label>
              <input
                className="text-white p-2 outline-none bg-[#444455] rounded-full gap-3 outline-slate-300 "
                id="email"
                type="email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="text-white flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                className="text-white p-2 outline-none bg-[#444455] rounded-md gap-3 outline-slate-300 "
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              className="text-slate-100 bg-gradient-to-r from-[#7b62ee] to-[#c3347e] p-2 rounded-full my-5"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
