import React from "react";
import logo from "../../../assets/images/header/logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import user from "../../../assets/images/header/user.svg";
import bookmark from "../../../assets/images/header/bookmark.svg";
import search from "../../../assets/images/header/search.svg";
import day from "../../../assets/images/header/day.svg";

const Header = () => {
  return (
    <div className="header-section">
      <div className="header-container">
        {/*------- left nav ----------- */}
        <div className="left-nav">
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/">manga</Link>
            </li>
          </ul>
        </div>

        {/*------- logo -------- */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        {/*------- right nav ------- */}
        <div className="right-nav">
          <ul>
            <li>
              <img src={search} alt="" />
            </li>
            <li>
              <Link>
                <img src={bookmark} alt="" />
              </Link>
            </li>
            <li>
              <Link to="register">
                <img src={user} alt="" />
              </Link>
            </li>
            <li>
              <img src={day} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
