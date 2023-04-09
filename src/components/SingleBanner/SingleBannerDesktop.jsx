import React from "react";
import { Fragment } from "react";
import downarrow from "../../assets/images/icons/downarrow.svg";
import bookmark from "../../assets/images/icons/bookmark.svg";
import share from "../../assets/images/icons/share.svg";

import eyelg from "../../assets/images/icons/eyelg.svg";

import heartlg from "../../assets/images/icons/heartlg.svg";
import SimilarProduct from "../SimilarProduct/SimilarProduct";
import BASE_URL from "../../utils/config";

const SingleBannerDesktop = ({ data, chapters }) => {
  return (
    <Fragment>
      <section
        className="single-banner-section single-banner-desktop"
        style={{
          backgroundImage: `url(${BASE_URL}${data?.background})`,
        }}
      >
        <div className="container ">
          {/*---------- thumbnail with title---------- */}

          <div className="manga-single-container">
            <div className="manga-single-pice-content">
              {/* thumnail image */}
              <div className="manga-single-img">
                <img
                  src={`${BASE_URL}${data?.thumbnail}`}
                  alt=""
                  className="animate__animated animate__bounce"
                />
                <div className="similar-article-count">
                  <div className="similar-article-view">
                    <img src={eyelg} alt="" />
                    <span>{data.view_count}</span>
                  </div>
                  <div className="similar-article-view">
                    <img src={heartlg} alt="" />
                    <span>{data.likes}</span>
                  </div>
                </div>
              </div>
              {/* middle content  */}
              <div className="manga-single-middle-content">
                <h2 className="animate__animated animate__fadeInUp">
                  {data.title}
                </h2>
                <div className="manga-single-status">
                  <span>On Going</span>
                  <span>upto ep. {chapters.length}</span>
                </div>
                {/* genre  */}
                <div className="manga-single-tags">
                  {data.genre &&
                    data.genre.map((gen) => (
                      <span key={gen.id}>{gen.title}</span>
                    ))}
                </div>
                <div className="manga-single-author">
                  <p>
                    Author name:{" "}
                    {data.author &&
                      data.author.map((auth) => (
                        <span key={auth.id}>{auth.name} </span>
                      ))}
                  </p>
                </div>
                <div className="manga-single-description">
                  <p>{data.summary}</p>
                  <div className="manga-single-more-text">
                    <div></div>
                    <div>
                      <img src={downarrow} alt="" />
                    </div>
                  </div>

                  <div className="manga-single-buttons">
                    <button>read now</button>
                    <span>
                      <img src={bookmark} alt="" />
                    </span>
                    <span>
                      <img src={share} alt="" />
                    </span>
                  </div>
                </div>
              </div>

              {/* similar manga */}
              <div className="manga-single-similar-episode">
                <SimilarProduct />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SingleBannerDesktop;
