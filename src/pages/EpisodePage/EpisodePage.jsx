import React from "react";
import EpisodeSlider from "../../components/Slider/EpisodeSlider";
import fullpage from "../../assets/images/episodepage/page1.png";
import "./episodepage.css";
import { useState, useEffect } from "react";
import FooterSidebar from "../../components/FooterSidebar/FooterSidebar";
import { useParams } from "react-router-dom";

const EpisodePage = () => {
  const { episodeId } = useParams();

  const [episodeData, setEpisodeData] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [screen, setScreen] = useState(false);

  const getEpisodeDetails = async () => {
    const result = await fetch(
      "http://192.168.50.246/list/pages/007788d6-cf5d-4066-8ba2-985d894a3d3a/",
      {
        method: "GET",
      }
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  function handleMouseMove(e) {
    const bottomOffset = 170;
    const isMouseNearBottom = window.innerHeight - e.clientY < bottomOffset;

    if (isMouseNearBottom) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  }
  return (
    <div className="episode-page">
      {/*-------- page content ----------- */}
      {scroll === true ? (
        <div className="full-width-episode">
          <div className="full-page animate__animated  animate__fadeIn">
            <img src={fullpage} alt="" />
          </div>
        </div>
      ) : (
        <EpisodeSlider scroll={scroll} screen={screen} setScreen={setScreen} />
      )}

      {/* episode page footer  */}
      {isSidebarOpen && (
        <div className="">
          <FooterSidebar
            scroll={scroll}
            setScroll={setScroll}
            scree={screen}
            setScreen={setScreen}
          />
        </div>
      )}

      {/* <div className="mobile-episode-footer">
        <h2>Hello world</h2>
      </div> */}
    </div>
  );
};

export default EpisodePage;
