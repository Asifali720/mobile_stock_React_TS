import React from "react";
import logo from "../../assets/logo.svg";
import clsx from "clsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = ({ navBg }: { navBg: boolean }) => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  return (
    <nav
      className={clsx(
        "w-full max-w-[1440px] mx-auto flex items-center justify-center py-10 rounded-3xl fixed z-50",
        navBg && "bg-[#f2fbff]"
      )}
    >
      <div className="flex w-full items-center justify-center gap-20 relative">
        <button
          className="lg:hidden absolute top-0 left-6"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <IoMdCloseCircleOutline size={30} color="#171a26" />
          ) : (
            <GiHamburgerMenu size={30} color="#171a26" />
          )}
        </button>
        <ul className="items-center gap-10 hidden lg:flex">
          <li className="font-poppins text-lg leading-5 font-medium text-black relative before:w-0 before:h-1 before:rounded-full before:bg-gradient-to-b from-[rgba(124,193,64,0.75)] to-[rgba(56,143,203,0.75)] before:block before:absolute before:-bottom-3 before:transition-all before:ease-in-out before:duration-300 before:left-0  before:-translate-y-1/2 hover:before:w-full cursor-pointer">
            Home
          </li>
          <li className="font-poppins text-lg leading-5 font-medium text-black relative before:w-0 before:h-1 before:rounded-full before:bg-gradient-to-b from-[rgba(124,193,64,0.75)] to-[rgba(56,143,203,0.75)] before:block before:absolute before:-bottom-3 before:transition-all before:ease-in-out before:duration-300 before:left-0  before:-translate-y-1/2 hover:before:w-full cursor-pointer">
            About Us
          </li>
          <li className="font-poppins text-lg leading-5 font-medium text-black relative before:w-0 before:h-1 before:rounded-full before:bg-gradient-to-b from-[rgba(124,193,64,0.75)] to-[rgba(56,143,203,0.75)] before:block before:absolute before:-bottom-3 before:transition-all before:ease-in-out before:duration-300 before:left-0  before:-translate-y-1/2 hover:before:w-full cursor-pointer">
            Wholesale
          </li>
        </ul>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <ul className=" items-center hidden lg:flex gap-10">
          <li className="font-poppins text-lg leading-5 font-medium text-black relative before:w-0 before:h-1 before:rounded-full before:bg-gradient-to-b from-[rgba(124,193,64,0.75)] to-[rgba(56,143,203,0.75)] before:block before:absolute before:-bottom-3 before:transition-all before:ease-in-out before:duration-300 before:left-0  before:-translate-y-1/2 hover:before:w-full cursor-pointer">
            Service
          </li>
          <li className="font-poppins text-lg leading-5 font-medium text-black relative before:w-0 before:h-1 before:rounded-full before:bg-gradient-to-b from-[rgba(124,193,64,0.75)] to-[rgba(56,143,203,0.75)] before:block before:absolute before:-bottom-3 before:transition-all before:ease-in-out before:duration-300 before:left-0  before:-translate-y-1/2 hover:before:w-full cursor-pointer">
            News
          </li>
          <li className="font-poppins text-lg leading-5 font-medium text-black relative before:w-0 before:h-1 before:rounded-full before:bg-gradient-to-b from-[rgba(124,193,64,0.75)] to-[rgba(56,143,203,0.75)] before:block before:absolute before:-bottom-3 before:transition-all before:ease-in-out before:duration-300 before:left-0  before:-translate-y-1/2 hover:before:w-full cursor-pointer">
            How it Works
          </li>
        </ul>

        <ul
          className={clsx(
            "absolute  flex flex-col gap-5 left-0 top-14 w-full rounded-3xl  text-center bg-[#f2fbff] transition-all lg:hidden ease-in-out duration-300 overflow-hidden",
            openMenu ? "menu_height py-10" : "h-0 py-0"
          )}
        >
          <li className="font-poppins text-4xl font-medium text-black relative before:w-0 before:h-1 before:rounded-full cursor-pointer transition-all ease-in-out duration-300 hover:text-transparent hover:bg-gradient-to-r from-[#388FCB] to-[#7CC140] hover:bg-clip-text">
            Home
          </li>
          <li className="font-poppins text-4xl font-medium text-black relative before:w-0 before:h-1 before:rounded-full cursor-pointer transition-all ease-in-out duration-300 hover:text-transparent hover:bg-gradient-to-r from-[#388FCB] to-[#7CC140] hover:bg-clip-text">
            About Us
          </li>
          <li className="font-poppins text-4xl font-medium text-black relative before:w-0 before:h-1 before:rounded-full cursor-pointer transition-all ease-in-out duration-300 hover:text-transparent hover:bg-gradient-to-r from-[#388FCB] to-[#7CC140] hover:bg-clip-text">
            Wholesale
          </li>
          <li className="font-poppins text-4xl font-medium text-black relative before:w-0 before:h-1 before:rounded-full cursor-pointer transition-all ease-in-out duration-300 hover:text-transparent hover:bg-gradient-to-r from-[#388FCB] to-[#7CC140] hover:bg-clip-text">
            Service
          </li>
          <li className="font-poppins text-4xl font-medium text-black relative before:w-0 before:h-1 before:rounded-full cursor-pointer transition-all ease-in-out duration-300 hover:text-transparent hover:bg-gradient-to-r from-[#388FCB] to-[#7CC140] hover:bg-clip-text">
            News
          </li>
          <li className="font-poppins text-4xl font-medium text-black relative before:w-0 before:h-1 before:rounded-full cursor-pointer transition-all ease-in-out duration-300 hover:text-transparent hover:bg-gradient-to-r from-[#388FCB] to-[#7CC140] hover:bg-clip-text">
            How it Works
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
