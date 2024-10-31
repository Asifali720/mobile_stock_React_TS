import React from "react";
import Slider from "react-slick";
import { data } from "./mock";
import dotedVector from "../../assets/doted-vector-1.png";

const ShowCaseSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 15,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto pt-[32px] pb-20 relative">
      <img
        src={dotedVector}
        alt=""
        className="absolute -bottom-10 left-0 w-[250px] rotation-animation"
      />

      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" className="w-14 h-14" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShowCaseSlider;
