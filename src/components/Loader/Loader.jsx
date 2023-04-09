import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const loader = useSelector((state) => state.loader);

  return (
    <div
      className={loader}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <span class="loader"></span>
    </div>
  );
};

export default Loader;
