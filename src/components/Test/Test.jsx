import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { IoHeartCircleOutline } from "react-icons/io5";
import "./test.scss";
import BASE_URL from "../../utils/config";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Test = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);

  return (
    <div className="test-container">
      <div className="gallery-wrap">
        {products.length > 0 &&
          products.slice(0, 6).map((item) => (
            <div
              // to={`/manga/${item.uid}`}
              className="item item-1"
              style={{
                backgroundImage: `url(${BASE_URL}${item.background})`,
              }}
              key={item.uid}
            >
              <div className="card-info">
                <div className="card-text" style={{ width: "400px" }}>
                  <h4>{item.title}</h4>
                  <p className="card-pera">{item.summary.slice(0, 88)}...</p>
                </div>
                <div className="l-card-view-count">
                  <p>
                    <span>
                      <BsFillEyeFill />
                    </span>{" "}
                    <span>{item.view_count}</span>
                  </p>
                  <p>
                    <IoHeartCircleOutline /> {item.likes}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Test;
