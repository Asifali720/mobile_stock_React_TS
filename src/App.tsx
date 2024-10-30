import React from 'react';
// import logo from './logo.svg';
import './App.css';
import InfoBar from './components/info_bar/InfoBar';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/hero_section/HeroSection';
import StockSlider from './components/stock_slider/StockSlider';


function App() {
  return (
    <div className="bg-[#388fcb]">     
      <InfoBar/>
      <div className='w-full bg-[#9eccea] rounded-t-3xl pt-6'>
        <div className='w-full bg-white rounded-t-3xl overflow-hidden'>
          <Navbar/>      
          <HeroSection/>
          <StockSlider/>
        </div>
      </div>
    </div>
  );
}

export default App;
