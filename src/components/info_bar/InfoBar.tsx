import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const InfoBar = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20 flex flex-col sm:flex-row items-center justify-between py-2 sticky top-0 z-50 bg-[#388fcb]">
      <div className="flex gap-4">
        <a
          href="mailto:info@abc.com"
          className="font-poppins font-medium text-white flex items-center gap-2"
        >
          <FaRegEnvelope size={20} /> <span>info@abc.com</span>
        </a>
        <a
          href="tel:+123 456 789"
          className="font-poppins font-medium text-white flex items-center gap-2"
        >
          <FiPhone size={20} /> <span>+123 456 789</span>
        </a>
      </div>
      <div className="flex items-center gap-5">
        <p className="font-poppins font-medium text-white">Privacy Policy</p>
        <div className="w-[1px] bg-white h-10"></div>
        <p className="font-poppins font-medium text-white">
          Terms and Condition
        </p>
      </div>
    </div>
  );
};

export default InfoBar;
