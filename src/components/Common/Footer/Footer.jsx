import React from "react";
import fb from "../../../assets/images/footer/fb.svg";
import twitter from "../../../assets/images/footer/twitter.svg";
import ins from "../../../assets/images/footer/ins.svg";
import yt from "../../../assets/images/footer/yt.svg";
import footerlogo from "../../../assets/images/footer/footer-logo.png";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        {/*---------- footer left --------- */}
        <div className="footer-left">
          <p>follow # mangaTale</p>
          <div className="footer-social-icon">
            <span>
              <img src={fb} alt="" />
            </span>
            <span>
              <img src={twitter} alt="" />
            </span>
            <span>
              <img src={ins} alt="" />
            </span>
            <span>
              <img src={yt} alt="" />
            </span>
          </div>
        </div>

        {/* footer middle  */}
        <div className="footer-middle">
          {/* footer logo  */}
          <div className="footer-logo">
            <img src={footerlogo} alt="" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>

        {/* footer right */}
        <div className="footer-right">
          <p>newletter</p>
          <input type="text" placeholder="please enter you email address" />
          <button>subscribe</button>
        </div>
      </div>
      <ul className="footer-menu">
        <li>contact us</li>
        <li>Terms & Condition </li>
        <li>Privacy Policy </li>
      </ul>
    </div>
  );
};

export default Footer;
