import React from 'react';
import './Header.css';
// import TeslaLogo from '../assets/teslaLogoSmall.svg';
import { AiOutlineAmazon } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
      <AiOutlineAmazon/>
      {/* <img src={TeslaLogo} alt="Tesla Logo" /> */}
      
   
        <a href="홈화면 주소 넣으면 됨">Sanmazon</a>
        </div>

      <div className="header__center">
        <a href="">About us</a>
        <a href="">Career</a>
        <a href="">Location</a>
      </div>

      <div className="header__right">
       <a href="">Register</a>
      <a href="">Account</a>
      </div>
    </div>
  );
};

export default Header;
