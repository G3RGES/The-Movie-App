// import axios from "axios";
// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import Movie from "./Movie";
import { useLoaderData, useNavigate, useRouteError } from "react-router-dom";
import { axiosInstance } from "../../AxiosInstance";

const Movies = () => {
  const API_KEY = "d4b6bc723ac291b078823a9b64bd3e08";

  // const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const moviesData = useLoaderData(moviesLoader);

  const total_pages = 20;

  // useEffect(() => {
  //   axiosInstance
  //     .get(`/movie/popular?page=${page}`)
  //     .then((res) => {
  //       setMovies(res.data.results);
  //       // console.log(res.data);

  //       // console.log(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   // axiosInstance
  //   //   .get(`/movie/popular?api_key=${API_KEY}&page=${page}`)
  //   //   .then((res) => console.log(res.data.results));
  // }, [page]);

  const nextPage = () => {
    if (page < total_pages) setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const navigate = useNavigate();

  const handleBack = () => navigate(`/`);

  return (
    <div className="container mx-auto p-6 mt-10 bg-[#132440] text-white shadow-md rounded-xl">
      <div className="flex items-center gap-2 text-gray-300 mb-8 text-sm">
        <button
          onClick={handleBack}
          className="flex items-center gap-1 hover:text-blue-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Home</span>
        </button>

        <span className="text-gray-500">/</span>
        <span className="text-blue-400 font-medium truncate max-w-[200px]">
          Movies
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center tracking-tight">
        Popular Movies
      </h1>

      {/* Grid */}
      <ul
        className="grid gap-6 
                 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                 place-items-center"
      >
        {moviesData?.map(({ id, title, overview, poster_path }) => (
          <Movie
            movies={moviesData}
            key={id}
            title={title}
            overview={overview}
            poster_path={poster_path}
            id={id}
          />
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-700 rounded-lg 
                 hover:bg-gray-600 disabled:opacity-40
                 transition-all duration-200"
        >
          {"<<"}
        </button>

        <span className="text-lg font-medium px-4 py-2 bg-[#0f1c33] rounded-lg shadow-inner">
          Page {page} of {total_pages}
        </span>

        <button
          onClick={nextPage}
          disabled={page === total_pages}
          className="px-4 py-2 bg-blue-600 rounded-lg 
                 hover:bg-blue-700 disabled:opacity-40
                 transition-all duration-200"
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export const moviesLoader = async () => {
  const res = await axiosInstance.get("/movie/popular");
  return res.data.results;
};

export const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="container mx-auto p-6 mt-10 bg-[#132440] text-white shadow-md rounded-xl">
      <h1 className="text-4xl font-bold mb-8 text-center tracking-tight">
        Error: {error.status} - {error.statusText}
      </h1>
    </div>
  );
};

export default Movies;
