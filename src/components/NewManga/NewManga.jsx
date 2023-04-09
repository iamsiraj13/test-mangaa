import React from "react";
import Marquee from "react-marquee-slider";
import NewMangaCard from "../Cards/NewMangaCard/NewMangaCard";

import "./newmanga.css";
import { useSelector } from "react-redux";
const NewManga = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="new-manga-episode">
      <div className="new-manga-section-title">
        <h2 className="section-title">new manga</h2>
        <button className="seell-btn">see all</button>
      </div>
      {/* new manga card  */}
      <div className="new-card-wrapper">
        <div className="new-card-marquee">
          {products.length > 0 &&
            products.map((item) => (
              <Marquee velocity={15}>
                <NewMangaCard item={item} key={item.uid} />
              </Marquee>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewManga;
