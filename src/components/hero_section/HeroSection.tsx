import React from "react";
import bgVector from "../../assets/bg-vector.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import instaIcon from "../../assets/icons/insta-icon.svg";
import twitterIcon from "../../assets/icons/twitter-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import accIcon from "../../assets/icons/account-icon.svg";
import ShowCaseSlider from "../show_case_slider/ShowCaseSlider";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#f2fbff] relative" id="hero-section">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20  flex items-center justify-between pt-40 pb-20 relative z-20">
        <img
          src={bgVector}
          alt="caption"
          className="absolute -top-10 right-0 max-w-[750px]"
        />
        <div className="w-full md:w-2/4">
          <h1 className="font-poppins font-bold text-black w-full max-w-[560px] !leading-[72px] text-5xl md:text-5xl mb-6">
            Largest <span className="text-[#388fcb]">Wholesalers</span> of{" "}
            <span className="text-[#388fcb]">Mobile Phones</span>
          </h1>
          <p className="font-poppins text-base leading-6 mb-6">
            Supply that meets Demand. Get the best wholesale prices of used and
            refurbished Mobile Stocks
          </p>
          <button className="font-poppins text-lg leading-5 text-[#388fcb] flex items-center gap-2 group mb-5">
            Learn More{" "}
            <FaArrowRight className="group-hover:-rotate-45 transition-all ease-in-out duration-300" />
          </button>
          <form action="" className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1 rounded-full px-5 py-4 bg-white border border-[#7CC140]">
              <FaRegEnvelope color="#888888" />
              <input
                type="text"
                placeholder="Email"
                className="border-none outline-none font-poppins text-base leading-[18px] text-[#888888] placeholder:text-[#888888] w-full max-w-[220px]"
              />
            </div>
            <button type="submit" className="px-5 py-4 bg-[#7CC140] rounded-full flex items-center gap-1 text-white font-poppins text-base leading-[18px]">
              Subscribe
              <FaArrowRight />
            </button>
            <button type="button" className="px-5 py-4 bg-[#388fcb] rounded-full flex items-center gap-1 text-white font-poppins text-base leading-[18px] ">
              <FaArrowRight />
              Stock List
            </button>
          </form>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-[6px]">
            <a href="#">
                <img src={instaIcon} alt="" />
            </a>
            <a href="#">
                <img src={facebookIcon} alt="" />
            </a>
            <a href="#">
                <img src={linkedinIcon} alt="" />
            </a>
            <a href="#">
                <img src={twitterIcon} alt="" />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img src={accIcon} alt="" />
            <p className="font-poppins text-base leading-6 font-semibold text-transparent bg-gradient-to-r from-[#388FCB] to-[#7CC140] bg-clip-text">400k people Registered</p>
          </div>
          </div>
        </div>
      </div>
      <div className="w-[25%] h-[10px] bg-gradient-to-r from-[#7CC140] to-[#388FCB] rounded-r-full mb-2"></div>
      <div className="w-[35%] h-[10px] bg-gradient-to-r from-[#388FCB] to-[#7CC140] rounded-r-full"></div>
         <ShowCaseSlider/>  
    </section>
  );
};

export default HeroSection;
