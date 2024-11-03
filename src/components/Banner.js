import React from "react";
import TypeAnim from "./TypeAnim";

function Banner() {
  return (
    <div className="max-w-full mx-auto md:px-20 px-4 flex flex-col md:flex-row md:items-center my-10 dark:bg-slate-700 dark:text-white p-14 overflow-hidden">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12">
        <div className="space-y-12">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello, I am <span className="text-red-500">Abdul Latif</span>
          </h1>
          <div className="text-red-500">
            <TypeAnim />
          </div>
          <p className="text-lg text-justify">
            A highly motivated and detail-oriented MERN Stack Developer with a
            strong foundation in web development. I have completed a
            comprehensive course in the MERN stack (MongoDB, Express.js,
            React.js, and Node.js), equipping me with the skills to build
            full-stack web applications. My background includes hands-on
            experience in developing dynamic and responsive websites, coupled
            with a solid understanding of JavaScript, HTML, CSS, and RESTful
            APIs. With a commitment to continuous learning and a passion for
            coding, I am eager to contribute to innovative projects and grow as
            a developer in a professional environment.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 order-1">
        <img
          className="bg-transparent w-full h-[500px] mt-16 md:ml-12 rounded"
          src="/latifprofile.jpg"
        />
      </div>
    </div>
  );
}

export default Banner;
