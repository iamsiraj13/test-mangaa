import React from "react";
import bannerbg from "../../assets/images/single-banner.png";
import thumb from "../../assets/images/singlepage/piece.png";
import { BsFillEyeFill, BsFillStarFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { IoHeartCircleSharp } from "react-icons/io5";
import "./singlemobieview.css";
const SingleBannerMobile = () => {
  return (
    <section className="single-mobile-view">
      {/* -------banner background section ---------- */}
      <div
        className="single-mobile-banner"
        style={{ backgroundImage: `url(${bannerbg})` }}
      ></div>

      {/*---------- banner content section ---------- */}
      <div className="single-mobile-content">
        <div className="single-mobile-thumbnail">
          <div className="thumbnail">
            <img src={thumb} alt="" />
          </div>
          <div className="single-mobile-title">
            <h2>one piece</h2>
            <div className="single-mobile-title-status">
              <span>on going</span>
              <span>upto ep.307</span>
            </div>
          </div>
        </div>

        <div className="single-mobile-rating">
          <div className="rating-react">
            <p>
              <span>
                <BsFillEyeFill />
              </span>
              2.1M
            </p>
            <p>
              <span>
                <IoHeartCircleSharp />
              </span>
              3.1M
            </p>
          </div>
          {/* rating count  */}
          <div className="rating-count">
            <div className="rating-start">
              <ul>
                <li>
                  <BsFillStarFill />
                </li>
                <li>
                  <BsFillStarFill />
                </li>
                <li>
                  <BsFillStarFill />
                </li>
                <li>
                  <BsFillStarFill />
                </li>
                <li>
                  <BsFillStarFill />
                </li>
              </ul>
            </div>
            <div className="rating-number">
              <h4>
                4.8{" "}
                <span>
                  <FaEdit />
                </span>{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* single banner genre  */}
      <div className="mobile-genre">
        <ul>
          <li>
            <a href="/">showbiz</a>
          </li>
          <li>
            <a href="/">showbiz</a>
          </li>
          <li>
            <a href="/">showbiz</a>
          </li>
          <li>
            <a href="/">showbiz</a>
          </li>
          <li>
            <a href="/">showbiz</a>
          </li>
          <li>
            <a href="/">showbiz</a>
          </li>
          <li>
            <a href="/">showbiz</a>
          </li>
          <li>
            <a href="/">showbiz</a>
          </li>
          <li>
            <a href="/">showbiz</a>
          </li>
          <li>
            <a href="/">showbiz</a>
          </li>
          <li>
            <a href="/">showbiz</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SingleBannerMobile;
