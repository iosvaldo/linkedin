import React from 'react'
import './Header.css'
import { BsSearch } from "react-icons/bs";
import logo from './images/linkedin.png';
import HeaderOption from './HeaderOption';
import {AiFillHome} from "react-icons/ai"
import { BsPeopleFill } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { MdNotificationsActive } from "react-icons/md";
import avatar from "./images/man.png";

function Header() {
  return (
    <div className="header">
      {/* <h1>This is the Header</h1> */}

      <div className="header__left">
        <img src={logo} alt="linkedin" />

        <div className="header__search">
          <BsSearch />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={AiFillHome} title="Home" />
        <HeaderOption Icon={BsPeopleFill} title="My Network" />
        <HeaderOption Icon={BsFillBriefcaseFill} title="Jobs" />
        <HeaderOption Icon={AiFillMessage} title="Messages" />
        <HeaderOption Icon={MdNotificationsActive} title="Notification" />
        <HeaderOption avatar={avatar} title="Me" />
      </div>
    </div>
  );
}

export default Header