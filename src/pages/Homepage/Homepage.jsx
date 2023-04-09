import React, { Fragment, Suspense, useEffect } from "react";
import HeroSlider from "../../components/Heroslider/HeroSlider";
import NewManga from "../../components/NewManga/NewManga";
import PopularMamga from "../../components/PopularManga/PopularMamga";
import RecentlyAdded from "../../components/RecentlyAdded/RecentlyAdded";
import Recommended from "../../components/Recommended/Recommended";
import TopRated from "../../components/TopRated/TopRated";
import HomeLatestEpisodeCard from "../../components/Cards/HomeLatestEpisode/HomeLatestEpisodeCard";
import Test from "../../components/Test/Test";

import { getProduct } from "../../feature/products/productApi";

const Homepage = () => {
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Fragment>
      <Suspense fallback={<h2>loading...</h2>}>
        <section>
          <HeroSlider />
        </section>
        <section>
          <PopularMamga />
        </section>
        <section>{/* <NewManga /> */}</section>
        <section>
          <RecentlyAdded />
        </section>
        <section>
          {/* <HomeLatestEpisodeCard /> */}

          <Test />
        </section>
        <section>{/* <Recommended /> */}</section>
        <section>
          <TopRated />
        </section>
      </Suspense>
    </Fragment>
  );
};

export default Homepage;
