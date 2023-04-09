import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import slideitem from "../../assets/images/heroslider/slideitem.png";
import { EffectCoverflow, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./heroslider.css";

// import required modules
import sliderbg from "../../assets/images/heroslider/sliderbg.png";
import { useState } from "react";

export default function HeroSlider() {
  // const [activeSlide, setActiveSlide] = useState(0);

  // const handleSlideChange = (swiper) => {
  //   setActiveSlide(swiper.activeIndex);
  // };
  return (
    <>
      <div
        className="hero-slider"
        style={{
          backgroundImage: `url(${sliderbg})`,
        }}
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={false}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
          // onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <LazyLoadImage
              alt="slider img"
              src={slideitem}
              effect="blur"
              PlaceholderSrc={slideitem}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              alt="slider img"
              src={slideitem}
              effect="blur"
              PlaceholderSrc={slideitem}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              alt="slider img"
              src={slideitem}
              effect="blur"
              PlaceholderSrc={slideitem}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              alt="slider img"
              src={slideitem}
              effect="blur"
              PlaceholderSrc={slideitem}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              alt="slider img"
              src={slideitem}
              effect="blur"
              PlaceholderSrc={slideitem}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              alt="slider img"
              src={slideitem}
              effect="blur"
              PlaceholderSrc={slideitem}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage
              alt="slider img"
              src={slideitem}
              effect="blur"
              PlaceholderSrc={slideitem}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
