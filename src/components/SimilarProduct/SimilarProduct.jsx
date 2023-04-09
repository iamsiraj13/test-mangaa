import React from "react";
import piece from "../../assets/images/singlepage/piece.png";
import similarimg from "../../assets/images/singlepage/similar-thumbnail.png";
import eye from "../../assets/images/icons/eye.svg";
import heart from "../../assets/images/icons/heart.svg";
import similarbookmark from "../../assets/images/icons/similar-bookmark.svg";
const SimilarProduct = () => {
  return (
    <div className="manga-single-right-wrapper">
      <h2>similar manga</h2>
      <div className="single-similar-card">
        {/* similar card img  */}
        <div className="single-similar-card-img">
          <img src={similarimg} alt="" />
        </div>
        {/* card content  */}
        <div className="single-similar-card-content">
          <div className="similar-card-title">
            <h3>Anime name in e...</h3>
            <img src={similarbookmark} alt="" />
          </div>
          <div className="similar-card-status">
            <span>end</span>
            <span>upto ep.307</span>
          </div>

          {/* views and reaction count  */}
          <div className="similar-card-count">
            <div className="similar-card-view">
              <img src={eye} alt="" />
              <span>2.1m</span>
            </div>
            <div className="similar-card-view">
              <img src={heart} alt="" />
              <span>2.1k</span>
            </div>
          </div>
          {/* similar card tags */}
          <div className="similar-card-tags">
            <span>showbiz</span>
            <span>action</span>
            <span>romance</span>
            <span>sci-fi</span>
            <span>fantasy</span>
            <span>more</span>
          </div>
        </div>
      </div>
      <div className="single-similar-card">
        {/* similar card img  */}
        <div className="single-similar-card-img">
          <img src={similarimg} alt="" />
        </div>
        {/* card content  */}
        <div className="single-similar-card-content">
          <div className="similar-card-title">
            <h3>Anime name in e...</h3>
            <img src={similarbookmark} alt="" />
          </div>
          <div className="similar-card-status">
            <span>end</span>
            <span>upto ep.307</span>
          </div>

          {/* views and reaction count  */}
          <div className="similar-card-count">
            <div className="similar-card-view">
              <img src={eye} alt="" />
              <span>2.1m</span>
            </div>
            <div className="similar-card-view">
              <img src={heart} alt="" />
              <span>2.1k</span>
            </div>
          </div>
          {/* similar card tags */}
          <div className="similar-card-tags">
            <span>showbiz</span>
            <span>action</span>
            <span>romance</span>
            <span>sci-fi</span>
            <span>fantasy</span>
            <span>more</span>
          </div>
        </div>
      </div>
      <div className="single-similar-card">
        {/* similar card img  */}
        <div className="single-similar-card-img">
          <img src={similarimg} alt="" />
        </div>
        {/* card content  */}
        <div className="single-similar-card-content">
          <div className="similar-card-title">
            <h3>Anime name in e...</h3>
            <img src={similarbookmark} alt="" />
          </div>
          <div className="similar-card-status">
            <span>end</span>
            <span>upto ep.307</span>
          </div>

          {/* views and reaction count  */}
          <div className="similar-card-count">
            <div className="similar-card-view">
              <img src={eye} alt="" />
              <span>2.1m</span>
            </div>
            <div className="similar-card-view">
              <img src={heart} alt="" />
              <span>2.1k</span>
            </div>
          </div>
          {/* similar card tags */}
          <div className="similar-card-tags">
            <span>showbiz</span>
            <span>action</span>
            <span>romance</span>
            <span>sci-fi</span>
            <span>fantasy</span>
            <span>more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProduct;
