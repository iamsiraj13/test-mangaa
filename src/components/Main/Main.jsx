import React from "react";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import MobileMenu from "../Common/MobileMenu/MobileMenu";

const Main = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="desktop-menu">
        <Header />
      </div>
      <div className="mobile-menu">
        <MobileMenu />
      </div>
      <main>
        <Outlet />
      </main>
      {pathname === "/" ? <Footer /> : null}
    </>
  );
};

export default Main;
