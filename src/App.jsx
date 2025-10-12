import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nav/Navbar";
import Movies from "./Components/Movies/Movies";
import MovieDetails from "./Components/Movies/MovieDetails";

const App = () => {
  return (
    <div className="container   ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default App;
