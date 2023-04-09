import React from "react";

import { RouterProvider } from "react-router-dom";
import { Fragment } from "react";
import Router from "./Router/Router";

const App = () => {
  return (
    <Fragment>
      <RouterProvider router={Router} />
    </Fragment>
  );
};

export default App;
