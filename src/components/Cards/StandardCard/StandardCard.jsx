import React from "react";
import cardthumb from "../../../assets/images/singlepage/cardimg.png";
import bookmarksm from "../../../assets/images/icons/bookmarksm.svg";
import stcardeye from "../../../assets/images/icons/stcardeye.svg";
import stcardheart from "../../../assets/images/icons/stheart.svg";

import "./standard.css";
const StandardCard = () => {
  return (
    <div className="standard-card">
      {/* card img  */}
      <div className="standard-card-img">
        <img src={cardthumb} alt="" />
      </div>
      {/* card content  */}

      <div className="standard-card-content">
        <div className="card-content-title">
          <h3>Anime English nam....</h3>
          <img src={bookmarksm} alt="" /> 
        </div>

        <div className="card-content">
          <span>upto ep.307</span>
          <div className="standard-card-count">
            <div className="standard-card-views">
              <img src={stcardeye} alt="" />
              <span>2.1m</span>
            </div>
            <div className="standard-card-views">
              <img src={stcardheart} alt="" />
              <span>2.1k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardCard;
