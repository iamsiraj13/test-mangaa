import React from "react";
import cardimg from "../../../assets/images/heroslider/pmanga.png";
import "./homelatestepisode.css";
const HomeLatestEpisodeCard = () => {
  return (
    <div className="accordion">
      <ul>
        <li style={{ backgroundImage: `url(${cardimg})` }}>
          <div>
            {" "}
            <a href="#">
              <h2>Title 1</h2>
              <p>Description 1</p>
            </a>{" "}
          </div>
        </li>
        <li style={{ backgroundImage: `url(${cardimg})` }}>
          <div>
            {" "}
            <a href="#">
              <h2>Title 2</h2>
              <p>Description 2</p>
            </a>{" "}
          </div>
        </li>
        <li style={{ backgroundImage: `url(${cardimg})` }}>
          <div>
            {" "}
            <a href="#">
              <h2>Title 3</h2>
              <p>Description 3</p>
            </a>{" "}
          </div>
        </li>
        <li style={{ backgroundImage: `url(${cardimg})` }}>
          <div>
            {" "}
            <a href="#">
              <h2>Title 4</h2>
              <p>Description 4</p>
            </a>{" "}
          </div>
        </li>
        <li style={{ backgroundImage: `url(${cardimg})` }}>
          <div>
            {" "}
            <a href="#">
              <h2>Title 5</h2>
              <p>Description 5</p>
            </a>{" "}
          </div>
        </li>
        <li style={{ backgroundImage: `url(${cardimg})` }}>
          <div>
            {" "}
            <a href="#">
              <h2>Title 6</h2>
              <p>Description 6</p>
            </a>{" "}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomeLatestEpisodeCard;
