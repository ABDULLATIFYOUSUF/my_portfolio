import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

function Contact() {
  return (
    <div className="py-20 dark:bg-slate-700 h-svh">

    <div className=" flex flex-col gap-4 items-center md:border-4 rounded-xl border-slate-900 w-fit mx-auto md:p-2 md:px-10 my-5 dark:bg-slate-700 dark:text-white">
      <div>
        <form className="flex flex-col gap-5">
          <h1 className="text-4xl underline font-bold text-center">For Contact</h1>
          <input
            className="border-4 border-slate-600 rounded-xl p-3 w-[100%] md:w-96 dark:bg-slate-700 dark:border-white"
            type="text"
            placeholder="Enter Your Name...."
          />
          <input
            className="border-4 border-slate-600 rounded-xl p-3 w-[100%] md:w-96 dark:bg-slate-700 dark:border-white"
            type="text"
            placeholder="Enter Your Contact Number...."
          />
          <textarea
            className="border-4 border-slate-600 rounded-xl p-3 w-[100%] md:w-96 dark:bg-slate-700 dark:border-white"
            placeholder="Enter Your Message...."
            rows={4}
            cols={40}
          />
          <button className="bg-black text-white rounded-md py-2 cursor-pointer hover:bg-slate-800 duration-300">
            Submit
          </button>
        </form>
      </div>
      {/* social media */}
      <div>
        <h1 className="text-center font-bold underline mb-3">Contact on Social Media</h1>
        <div className="flex gap-4">
          <a
            className="bg-black text-white rounded-md px-3 py-2 cursor-pointer hover:bg-slate-800 duration-300"
            href="https://www.facebook.com/latif.memon.50"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="bg-black text-white rounded-md px-3 py-2 cursor-pointer hover:bg-slate-800 duration-300"
            href="https://wa.me/923002288944"
            target="_blank"
          >
            <BsWhatsapp />
          </a>
          <a
            className="bg-black text-white rounded-md px-3 py-2 cursor-pointer hover:bg-slate-800 duration-300"
            href="https://www.linkedin.com/in/abdul-latif-531428263/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="bg-black text-white rounded-md px-3 py-2 cursor-pointer hover:bg-slate-800 duration-300"
            href="https://github.com/ABDULLATIFYOUSUF"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="bg-black text-white rounded-md px-3 py-2 cursor-pointer hover:bg-slate-800 duration-300"
            href="mailto:latifyousuf513@gmail.com"
            target="_blank"
          >
            <BiLogoGmail />
          </a>
        </div>
      </div>

      {/* resume */}
      <div className="flex flex-col items-center">
        <h1 className="text-center font-bold underline mb-5">For More Details</h1>

        <a
          className="btn bg-black text-white"
          href="/latif resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
    </div>
  );
}

export default Contact;
