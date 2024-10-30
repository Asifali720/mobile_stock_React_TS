import React from 'react'
import Slider from "react-slick";
import { data } from './mock';
import dotedVector from "../../assets/doted-vector-1.png"

const ShowCaseSlider = () => {

 const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 20,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };

  return (
    <div className='w-full max-w-[1440px] mx-auto pt-[32px] pb-20 relative'>
        <img src={dotedVector} alt=""  className="absolute -bottom-10 left-0 w-[250px]"/>

      <Slider {...settings}>
        {
          data.map((item, index) => (
            <div key={index}>
              <img src={item} alt="" className='w-10 h-10'/>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default ShowCaseSlider