import React from "react";
import MangaCard from "../Cards/MangaCard/MangaCard";

import "./toprated.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const TopRated = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="top-rated-section">
      {/* setion title  */}
      <div className="top-rate-section-title">
        <h className="section-title">top rated</h>
      </div>

      {/* section content  */}
      <div className="top-rated-content-wrapper">
        {products.length > 0 &&
          products
            .slice(0, 5)
            .map((item) => <MangaCard data={item} key={item.uid} />)}
      </div>
    </div>
  );
};

export default TopRated;
