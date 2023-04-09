import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import page from "../../assets/images/episodepage/page1.png";
import rightarrow from "../../assets/images/episodepage/right-arrow.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import "../../pages/EpisodePage/episodepage.css";

const EpisodeSlider = ({ screen }) => {
  return (
    <div className="episode-page-container animate__animated  animate__fadeIn">
      <Swiper
        slidesPerView={1}
        slidesPerGroupSkip={1}
        slidesPerGroup={2}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {/*--------- page left------ */}
          <div className="page">
            <img src={page} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/*--------- page left------ */}
          <div className="page">
            <img src={page} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/*--------- page left------ */}
          <div className="page">
            <img src={page} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/*--------- page left------ */}
          <div className="page">
            <img src={page} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EpisodeSlider;
