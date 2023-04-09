import React from "react";
import eyesm from "../../../assets/images/icons/eyesm.svg";
import heartsm from "../../../assets/images/icons/heartsm.svg";
import comment from "../../../assets/images/icons/comment.svg";
import "./episodecard.css";
const EpisodeCard = ({ chapter, key }) => {
  return (
    <>
      <div className="single-episode-card" key={key}>
        <p>{chapter.created_at}</p>
        <h3>{chapter.title}</h3>
        <div className="single-episode-card-count">
          <div className="single-episode-card-views">
            <img src={eyesm} alt="" />
            <span>2.1m</span>
          </div>
          <div className="single-episode-card-views">
            <img src={heartsm} alt="" />
            <span>2.1k</span>
          </div>
          <div className="single-episode-card-views">
            <img src={comment} alt="" />
            <span>2.1k</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EpisodeCard;
