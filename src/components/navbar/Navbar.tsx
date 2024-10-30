import React from 'react'
import logo from '../../assets/logo.svg'
const Navbar = () => {
  return (
    <nav className='w-full max-w-[1440px] mx-auto flex items-center justify-center py-10 rounded-2xl fixed z-30'>
       <div className='flex items-center gap-20'>
            <ul className='flex items-center gap-10'>
                <li className='font-poppins text-lg leading-5 font-medium text-black relative before:w-0 before:h-1 before:rounded-full before:bg-gradient-to-b from-[rgba(124,193,64,0.75)] to-[rgba(56,143,203,0.75)] before:block before:absolute before:-bottom-3 before:transition-all before:ease-in-out before:duration-300 before:left-0  before:-translate-y-1/2 hover:before:w-full cursor-pointer'>Home</li>
                <li className='font-poppins text-lg leading-5 font-medium text-black relative before:w-0 before:h-1 before:rounded-full before:bg-gradient-to-b from-[rgba(124,193,64,0.75)] to-[rgba(56,143,203,0.75)] before:block before:absolute before:-bottom-3 before:transition-all before:ease-in-out before:duration-300 before:left-0  before:-translate-y-1/2 hover:before:w-full cursor-pointer'>About Us</li>
                <li className='font-poppins text-lg leading-5 font-medium text-black relative before:w-0 before:h-1 before:rounded-full before:bg-gradient-to-b from-[rgba(124,193,64,0.75)] to-[rgba(56,143,203,0.75)] before:block before:absolute before:-bottom-3 before:transition-all before:ease-in-out before:duration-300 before:left-0  before:-translate-y-1/2 hover:before:w-full cursor-pointer'>Wholesale</li>
            </ul>
            <a href="/">
            <img src={logo} alt="" />
            </a>

            <ul className='flex items-center gap-10'>
                <li className='font-poppins text-lg leading-5 font-medium text-black relative before:w-0 before:h-1 before:rounded-full before:bg-gradient-to-b from-[rgba(124,193,64,0.75)] to-[rgba(56,143,203,0.75)] before:block before:absolute before:-bottom-3 before:transition-all before:ease-in-out before:duration-300 before:left-0  before:-translate-y-1/2 hover:before:w-full cursor-pointer'>Service</li>
                <li className='font-poppins text-lg leading-5 font-medium text-black relative before:w-0 before:h-1 before:rounded-full before:bg-gradient-to-b from-[rgba(124,193,64,0.75)] to-[rgba(56,143,203,0.75)] before:block before:absolute before:-bottom-3 before:transition-all before:ease-in-out before:duration-300 before:left-0  before:-translate-y-1/2 hover:before:w-full cursor-pointer'>News</li>
                <li className='font-poppins text-lg leading-5 font-medium text-black relative before:w-0 before:h-1 before:rounded-full before:bg-gradient-to-b from-[rgba(124,193,64,0.75)] to-[rgba(56,143,203,0.75)] before:block before:absolute before:-bottom-3 before:transition-all before:ease-in-out before:duration-300 before:left-0  before:-translate-y-1/2 hover:before:w-full cursor-pointer'>How it Works</li>
            </ul>
       </div>
    </nav>
  )
}

export default Navbar