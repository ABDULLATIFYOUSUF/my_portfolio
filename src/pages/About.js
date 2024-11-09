import React from "react";
import Navbar from "../components/Navbar";
import list from "../components/list.json";
import Cards from "../components/Cards";
import EduCards from "../components/EduCards";
import edu from "../components/edu.json"

function About() {
  const qualification = edu
  console.log(edu)
  return (
    <div className="dark:bg-slate-700 pt-20 py-10 h-screen">
      <div className="w-screen">
        <h1 className="text-red-600 text-center underline font-bold text-4xl">Education</h1>
      <div className="flex flex-wrap gap-8 mt-5 justify-center">
        {qualification.map((Eduitem) => (
          <div className="">
            <EduCards key={Eduitem.id} Eduitem={Eduitem}/>
          </div>
        ))}
      </div>
      </div>
      <div className="mt-16 w-screen">
        <h1 className="text-red-600 text-center underline font-bold text-4xl">Work Experience</h1>
      <div className="flex flex-wrap gap-8 mt-5 justify-center">
        {list.map((item) => (
          <Cards key={item.id} item={item}/>
        ))}
      </div>
      </div>
    </div>
  );
}

export default About;
