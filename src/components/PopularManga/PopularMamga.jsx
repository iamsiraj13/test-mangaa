import React, { useEffect } from "react";

import MangaCard from "../Cards/MangaCard/MangaCard";
import episodeimg from "../../assets/images/popular-manga/episodecard.png";
import "./popularmanga.css";
import { Link } from "react-router-dom";
import { getProduct } from "../../feature/products/productApi";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
const PopularMamga = () => {
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    getProduct();
  }, []);
  return (
    // popular manga section
    <div className="popular-manga-section">
      <div className="popular-manga-container">
        {/*------- popular manga left section  start---- */}
        <div className="popular-manga">
          <div className="section-header">
            <h2 className="section-title">popular manga</h2>
            <button className="seell-btn">see all</button>
          </div>
          <div className="p-manga-wrapper">
            {isLoading && <Loader />}
            {products &&
              products.map((data, index) => (
                <Link
                  to={`/manga/${data?.uid}`}
                  className="p-card"
                  key={data.uid}
                >
                  <MangaCard data={data} />
                </Link>
              ))}
          </div>
        </div>
        {/*------- popular manga left section  end---- */}

        {/* ----latest episode section start ------- */}
        <div className="latest-episode">
          <div className="latest-epsection">
            <h2 className="section-title">latest episode</h2>
            <div>
              <button className="seell-btn">see all</button>
            </div>
          </div>
          {/* episode card wrapper  */}
          <div className="latest-episode-card-wrapper">
            {/* single episode card  */}
            <div className="episoder-card">
              <img src={episodeimg} alt="" />
              <div className="episode-card-info">
                <p>jujustsu</p>
                <div className="episode-card-read-btn">
                  <p>episode # 121</p>
                  <button className="read-more">read more</button>
                </div>
              </div>
            </div>
            {/* single episode card  */}
            <div className="episoder-card">
              <img src={episodeimg} alt="" />
              <div className="episode-card-info">
                <p>jujustsu</p>
                <div className="episode-card-read-btn">
                  <p>episode # 121</p>
                  <button className="read-more">read more</button>
                </div>
              </div>
            </div>
            {/* single episode card  */}
            <div className="episoder-card">
              <img src={episodeimg} alt="" />
              <div className="episode-card-info">
                <p>jujustsu</p>
                <div className="episode-card-read-btn">
                  <p>episode # 121</p>
                  <button className="read-more">read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----latest episode section end ------- */}
      </div>
    </div>
  );
};

export default PopularMamga;
