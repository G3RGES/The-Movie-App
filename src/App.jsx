import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nav/Navbar";
import Movies from "./Components/Movies/Movies";
import MovieDetails from "./Components/Movies/MovieDetails";
import SearchResults from "./Components/Search/SearchResults";

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies/search/:query" element={<SearchResults />} />
        </Routes>
      </BrowserRouter> */}

      <Navbar />
      <div className="pt-20 px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
