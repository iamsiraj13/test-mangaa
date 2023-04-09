import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Homepage from "../pages/Homepage/Homepage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import SinglePage from "../pages/SinglePage/SinglePage";
import EpisodePage from "../pages/EpisodePage/EpisodePage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <RegisterPage />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
      },
      {
        path: "/manga/:mangaId",
        element: <SinglePage />,
      },
      {
        path: "/manga/episode/:episodeId",
        element: <EpisodePage />,
      },
    ],
  },
]);
export default Router;
