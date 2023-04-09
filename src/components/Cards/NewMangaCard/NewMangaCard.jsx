import React from "react";
import eye from "../../../assets/images/new-manga/eye.svg";
import heart from "../../../assets/images/new-manga/heart.svg";
import cardimg from "../../../assets/images/new-manga/new-manga.png";
import "./newmangacard.css";
import { Link } from "react-router-dom";

const NewMangaCard = ({ item }) => {
  return (
    <div className="new-manga-card">
      {/* card content  */}
      <div className="new-manga-card-content">
        <h3>{item?.title}</h3>
        <div className="new-manga-count">
          <div className="new-manga-view">
            <span>
              <img src={eye} alt="" />
              <p>2.1M</p>
            </span>
            <span>
              <img src={heart} alt="" />
              <p>2.1M</p>
            </span>
          </div>
        </div>

        <p>{item?.summary.slice(0, 88)}</p>
        <button>
          <Link to={`/manga/${item.uid}`}>read now</Link>
        </button>
      </div>
      {/* card image  */}
      <div className="new-manga-card-img">
        <img src={cardimg} alt="" />
      </div>
    </div>
  );
};

export default NewMangaCard;
