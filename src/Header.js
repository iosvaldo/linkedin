import React from 'react'
import './Header.css'
import { BsSearch } from "react-icons/bs";
import logo from './images/linkedin.png';

function Header() {
  return (
    <div className="header">
      {/* <h1>This is the Header</h1> */}

      <div className="header__left">
        <img
          src={logo}
          alt="linkedin"
        />

        <div className="header__search">
          <BsSearch />
          <input type="text" />
        </div>
      </div>

      <div className="header__right"></div>


    </div>
  )
}

export default Header