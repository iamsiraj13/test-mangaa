import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import logo from "../../../assets/images/header/mobilelogo.png";
import hamburger from "../../../assets/images/header/menu.svg";
import day from "../../../assets/images/header/day.svg";
import slogo from "../../../assets/images/header/sidebar-logo.png";
import "react-modern-drawer/dist/index.css";
import "./mobilemenu.css";
import { Link } from "react-router-dom";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="mobile-nav">
      {/* mobile menu  */}
      <div className="mobile-nav-container">
        {/* navbar left */}
        <div className="m-nav-left">
          <img src={hamburger} alt="" onClick={toggleDrawer} />
        </div>

        {/* logo  */}
        <div className="mobile-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        {/* navbar right  */}
        <div className="m-nav-right">
          <img src={day} alt="" />
        </div>
      </div>

      {/* mobile sidebar menu  */}
      <div className="m-sidebar">
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="bla bla bla"
        >
          <div className="sidebar-logo">
            <img src={slogo} alt="" />
          </div>
          <div className="side-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                manga
                <div className="submenu">
                  <ul>
                    <li>
                      <Link>popular manga</Link>
                    </li>
                    <li>
                      <Link>new manga</Link>
                    </li>
                    <li>
                      <Link>all manga</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                account
                <div className="submenu">
                  <ul>
                    <li>
                      <Link>bookmarks</Link>
                    </li>
                    <li>
                      <Link>account setting</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="sidemenu-logout">
            <div className="s-author-img"></div>
            <p>Log out</p>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileMenu;
