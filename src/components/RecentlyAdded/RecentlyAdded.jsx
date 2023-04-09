import React from "react";
import MangaCard from "../Cards/MangaCard/MangaCard";

import "./recentlyadded.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RecentlyAdded = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="recent-section">
      {/* recently section title */}
      <div className="recent-section-heading">
        <h2 className="section-title">recently added</h2>
        <button className="seell-btn">see all</button>
      </div>

      <div className="recent-episode-wrapper">
        {products.length > 0 &&
          products.slice(0, 7).map((product) => (
            <Link
              to={`/manga/${product.uid}`}
              className="siraj"
              key={product.id}
            >
              <MangaCard data={product} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
