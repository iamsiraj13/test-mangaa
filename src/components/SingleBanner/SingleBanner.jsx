import React, { Fragment, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import positive from "../../assets/images/icons/positive.svg";
import reverse from "../../assets/images/icons/reverse.svg";
import "./SingleBanner.css";
import EpisodeCard from "../Common/EpisodeCard/EpisodeCard";
import doublearrowdown from "../../assets/images/icons/doublearrowdown.svg";
import StandardCard from "../Cards/StandardCard/StandardCard";
import avater from "../../assets/images/singlepage/avater.png";
import { Link, useParams } from "react-router-dom";

import { getProductDetails } from "../../feature/products/productApi";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import SingleBannerDesktop from "./SingleBannerDesktop";
import SingleBannerMobile from "./SingleBannerMobile";

const SingleBanner = () => {
  const { mangaId } = useParams();

  const datas = useSelector((state) => console.log(state.products));

  console.log(mangaId);

  const [data, setData] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const getUsers = async () => {
    setIsloading(true);
    const response = await fetch(
      `http://199.192.20.93:81/details/manga/${mangaId}/`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    setData(data);
    setIsloading(false);
  };
  const getChapters = async () => {
    setIsloading(true);
    const response = await fetch(
      `http://199.192.20.93:81/list/chapters/${mangaId}/`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setChapters(data);
    setIsloading(false);
  };

  useEffect(() => {
    getProductDetails(mangaId);
    getUsers();
    getChapters();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Fragment>
      <SingleBannerMobile />
      <SingleBannerDesktop data={data} chapters={chapters} />

      {/* ------------- episode list--------- */}
      <section className="single-page-episodelist">
        <div className="container">
          <Tabs>
            {/* tab  buttons  */}
            <div className="single-episode-tab">
              <div className="tab-left">
                <TabList>
                  <Tab>
                    <button className="left-button-active">episode</button>
                  </Tab>
                  <Tab>
                    <button>comment</button>
                  </Tab>
                </TabList>
              </div>
              <div className="tab-right">
                <button>
                  {" "}
                  <img src={positive} alt="" /> positive
                </button>
                <span>/</span>
                <button>
                  <img src={reverse} alt="" /> reverse
                </button>
              </div>
            </div>

            {/* episode list single card  */}
            <div>
              {/* episode list */}
              <TabPanel>
                <div className={` episode-list`}>
                  <div className="episode-card-wrapper">
                    {chapters &&
                      chapters.map((chapter) => (
                        <Link to={`/manga/episode/${chapter.uid}`}>
                          <EpisodeCard chapter={chapter} key={chapter.id} />
                        </Link>
                      ))}
                  </div>
                  <div className="episode-card-bottom-button">
                    <button>
                      <img src={doublearrowdown} alt="" />
                    </button>
                  </div>
                </div>
              </TabPanel>

              {/* comments  */}
              <TabPanel>
                <div className={`comments`}>
                  {/* user  */}
                  <div className="user">
                    <img src={avater} alt="" />
                    <h3>user Name</h3>
                  </div>
                  {/* users comment form  */}
                  <div className="user-comment-form">
                    <textarea />

                    <button>comment</button>
                  </div>
                  {/* user comment  */}
                  <div className="user-comments-list">
                    <div className="user ">
                      <img src={avater} alt="" />
                      <div className="commented-user">
                        <h3>user Name</h3>
                        <p>4month ago edited</p>
                      </div>
                    </div>
                    <div className="comment-text">
                      <p>
                        User Comment .Okay Lets do some story fusionThis story +
                        cultivation + OP mc = Instant fourth grade
                      </p>
                    </div>
                  </div>
                  <div className="user-comments-list">
                    <div className="user ">
                      <img src={avater} alt="" />
                      <div className="commented-user">
                        <h3>user Name</h3>
                        <p>4month ago edited</p>
                      </div>
                    </div>
                    <div className="comment-text">
                      <p>
                        User Comment .Okay Lets do some story fusionThis story +
                        cultivation + OP mc = Instant fourth grade
                      </p>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </section>

      {/* adds sction  */}
      <section className="adds">
        <h2>ads</h2>
      </section>

      {/* recommended episode  */}
      <section className="recommends-section">
        <div className="container">
          <div className="recommends-wrapper">
            <h2>recommended for you</h2>
            <div className="recommended-card-wrapper">
              <StandardCard />
              <StandardCard />
              <StandardCard />
              <StandardCard />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SingleBanner;
