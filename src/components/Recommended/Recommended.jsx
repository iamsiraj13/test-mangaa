import React from "react";
import Marquee from "react-marquee-slider";
import MangaCard from "../Cards/MangaCard/MangaCard";
import "./recommended.css";
import { useSelector } from "react-redux";
const Recommended = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="recommended-section">
      {/* setion title  */}
      <div className="recommended-section-title">
        <h className="section-title">Recommended for you</h>
      </div>
      <div className="recommended-content-wrapper">
        <Marquee velocity={13}>
          {products &&
            products.map((product) => (
              <div className="recommend-box" key={product.id}>
                <MangaCard data={product} />
              </div>
            ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Recommended;
