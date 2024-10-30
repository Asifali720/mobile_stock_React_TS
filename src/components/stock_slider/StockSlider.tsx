import React from "react";
import bottomVector from "../../assets/bottom-vector.png";
import mobileStockLogo from "../../assets/icons/mobile-stock-logo.svg";
import { data } from "./mock";
import Slider from "react-slick";
import leftArrow from '../../assets/icons/left-arrow-icon.svg'
import rightArrow from '../../assets/icons/right-arrow-icon.svg'

const StockSlider = () => {

    function SampleNextArrow(props: any) {
        const { onClick } = props;
        return (
          <button onClick={onClick} className="absolute z-10 right-[40%] mt-[2px]">
            <img src={rightArrow} alt="" />
          </button>
        );
      }
 
      function SamplePrevArrow(props: any) {
        const { onClick } = props;
        return (
        <button onClick={onClick} className="absolute z-10 left-[40%] -bottom-[11%] ">
            <img src={leftArrow} alt="" />
        </button>
        );
      }
    



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section className="w-full relative" id="stock-slider">
      <img src={bottomVector} alt="" className="absolute -top-1 left-0" />
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20 relative pt-20 pb-14">
        <div className="flex flex-col items-center justify-center">
          <img src={mobileStockLogo} alt="" className="mb-5" />
          <p className="font-poppins w-full max-w-[923px] font-medium text-xl  !leading-8 text-center text-[#333333] mb-[50px]">
            We stay upto date with latest technology trends and offer innovative
            solutions. that help you stay ahead in competetion
          </p>
        </div>

        <Slider {...settings} className="stock_slider">
          {data?.map((item) => (
            <div key={item.id} className="!pl-3">
              <div className="bg-gradient-to-t from-[#388FCB] to-[#7CC140] rounded-3xl p-1 overflow-hidden">
                <div className="w-full bg-[#f2fbff] p-10 rounded-3xl flex flex-col items-center justify-center gap-1">
                  <img src={item.img} alt="" className="w-[100px]" />
                  <div>
                    <h3 className="font-poppins font-medium text-xl !leading-8 text-[#333333] mt-5">
                      {item.name}
                    </h3>
                    <p className="font-poppins font-medium text-xs text-center !leading-[18px] text-[#888888]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default StockSlider;