import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import errorimg from "../../assets/images/common/errorimg.png";
import "./errorpage.css";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="errorimg">
        <LazyLoadImage src={errorimg} effect="blur" />
      </div>
    </div>
  );
};
export default ErrorPage;
