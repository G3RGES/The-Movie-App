// import React, { useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nav/Navbar";
import Movies from "./Components/Movies/Movies";
import MovieDetails from "./Components/Movies/MovieDetails";
import SearchResults from "./Components/Search/SearchResults";

const App = () => {
  // const [dark, setDark] = useState(false);

  // useEffect(() => {
  //   if (dark) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [dark]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* <div
      className={`dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-900 min-h-screen`}
    > */}

      {/* <Navbar darkMode={dark} setDark={setDark} /> */}
      <Navbar />
      <div className="pt-20 px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
