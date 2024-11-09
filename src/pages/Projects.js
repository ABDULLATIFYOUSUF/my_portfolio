import React from "react";
import SupportCard from "../components/SupportCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import appList from "../components/appList.json";

function Projects() {
  const supportList = appList;
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pt-20 px-10 py-5 dark:bg-slate-700">
      <h1 className="text-4xl font-bold underline mb-8 dark:text-white">My Projects</h1>
      <Slider {...settings}>
        {supportList.map((item) => (
          <SupportCard item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
