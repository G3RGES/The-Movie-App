// import React, { useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nav/Navbar";

import Movies from "./Components/Movies/Movies"; // moviesLoader, // ErrorBoundary,
import MovieDetails from "./Components/Movies/MovieDetails";
import SearchResults from "./Components/Search/SearchResults";

import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TvShows, { tvShowsLoader } from "./Components/Tv/TvShows";
import TvShowDetails from "./Components/Tv/TvShowDetails";
import MainComponent from "./Components/MainComponent/MainComponent";
import Favourite from "./Components/Favourite/Favourite";

import Login from "./Components/Form/Login";
import Register from "./Components/Form/Register";
import { ThemeContext } from "./context/theme";
import { useContext } from "react";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainComponent />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "movies",
          element: <Movies />,
          // loader: moviesLoader,
          // errorElement: <ErrorBoundary />,
        },
        {
          path: "tv",
          element: <TvShows />,
          loader: tvShowsLoader,
          // errorElement: <ErrorBoundary />,
        },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "favourites", element: <Favourite /> },
        { path: "tv/:id", element: <TvShowDetails /> },
        { path: "movies/:id", element: <MovieDetails /> },
        { path: "movies/search/:query", element: <SearchResults /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  const { mode: theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      } min-h-screen rounded-3xl`}
    >
      {/* <div
      className={`dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-900 min-h-screen`}
    > */}
      {/* <Navbar darkMode={dark} setDark={setDark} /> */}
      {/* <Navbar />
      <div className="pt-20 px-6">
        <Outlet />
      </div> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
