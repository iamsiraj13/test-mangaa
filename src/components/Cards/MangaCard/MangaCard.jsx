import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import eye from "../../../assets/images/popular-manga/eye.svg";
import heart from "../../../assets/images/popular-manga/heart.svg";

import "./mangacard.css";
import BASE_URL from "../../../utils/config";
import { Link } from "react-router-dom";
const MangaCard = ({ data }) => {
  return (
    <Link className="p-manga-card" to={`/manga/${data.uid}`}>
      <div className="card-status">
        <p>on going</p>
      </div>
      <LazyLoadImage
        alt="slider img"
        src={`${BASE_URL}${data?.thumbnail}`}
        effect="blur"
      />
      <div className="card-info">
        <h3 className="">{data?.title}</h3>
        <div className="p-manga-card-count">
          <div>
            <span>
              <img src={eye} alt="" />
            </span>
            <span>{data?.view_count}</span>
          </div>
          <div>
            <span>
              <img src={heart} alt="" />
            </span>
            <span>{data?.likes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MangaCard;
