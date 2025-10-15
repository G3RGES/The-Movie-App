// import axios from "axios";
// import React, { useEffect, useState } from "react";
import React, { useContext, useEffect, useState } from "react";
// import Movie from "./Movie";
import {
  // useLoaderData,
  useLocation,
  useNavigate,
  // useRouteError,
} from "react-router-dom";

import Movie from "./Movie";
// import axiosInstance from "../../AxiosInstance";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { moviesAction } from "../../store/MoviesSlice";
import { ThemeContext } from "../../context/theme";

// const API_KEY = "d4b6bc723ac291b078823a9b64bd3e08";
const Movies = () => {
  // const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const total_pages = 20;
  const { mode: theme } = useContext(ThemeContext);

  // const moviesData = useLoaderData();

  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.movies.movies);

  const location = useLocation();

  const [page, setPage] = useState(() => {
    const params = new URLSearchParams(location.search);
    return Number(params.get("page")) || 1;
  });

  useEffect(() => {
    dispatch(moviesAction(page)); // fetch first page // dispatch(moviesAction()); // fetch first page
    navigate(`?page=${page}`, { replace: false });
  }, [page, navigate, dispatch]);

  // const theme = useSelector((state) => state.theme.mode);
  const loader = useSelector((state) => state.loader.isLoading);

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

  const handleBack = () => navigate(`/`);

  return (
    <div
      className={`"container mx-auto p-6 mt-10 ${
        theme === "dark"
          ? "bg-[#132440] text-white"
          : "text-gray-900 bg-gray-100"
      } shadow-md rounded-xl"`}
    >
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
      {loader ? (
        <div className="text-center font-bold ">Loading...</div>
      ) : (
        <ul
          className="grid gap-6 
                 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                 place-items-center"
        >
          {moviesData?.map(({ id, title, overview, poster_path }, movie) => (
            <Movie
              movies={moviesData}
              key={id}
              title={title}
              overview={overview}
              poster_path={poster_path}
              id={id}
              movie={movie}
            />
          ))}
        </ul>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className={`${
            theme === "dark" ? "bg-[#0f1c33]" : "bg-gray-100"
          } px-4 py-2 hover:text-white rounded-lg shadow-md
                 hover:bg-gray-600 disabled:opacity-40
                 transition-all duration-200`}
        >
          {"<<"}
        </button>

        <span
          className={`${
            theme === "dark" ? "bg-[#0f1c33]" : "bg-gray-100"
          } text-lg font-medium px-4 py-2 bg-[#0f1c33] rounded-lg shadow-inner`}
        >
          Page {page} of {total_pages}
        </span>

        <button
          onClick={nextPage}
          disabled={page === total_pages}
          className={`${
            theme === "dark" ? "bg-[#0f1c33]" : "bg-gray-100"
          } px-4 py-2 rounded-lg 
                 hover:bg-blue-900 hover:text-white shadow-md disabled:opacity-40
                 transition-all duration-200`}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

// export const moviesLoader = async (page = 1) => {
//   const res = await axiosInstance.get(
//     `/movie/popular?api_key=${API_KEY}&page=${page}`
//   );
//   return res.data.results;
// };

// eslint-disable-next-line react-refresh/only-export-components
// export const moviesLoader = async ({ request }) => {
//   const url = new URL(request.url);
//   const page = url.searchParams.get("page") || 1;

//   const res = await axiosInstance.get(
//     `/movie/popular?api_key=${API_KEY}&page=${page}`
//   );
//   return res.data.results;
// };

// export const ErrorBoundary = () => {
//   const error = useRouteError();

//   return (
//     <div className="container mx-auto p-6 mt-10 bg-[#132440] text-white shadow-md rounded-xl">
//       <h1 className="text-4xl font-bold mb-8 text-center tracking-tight">
//         Error: {error.status} - {error.statusText}
//       </h1>
//     </div>
//   );
// };

export default Movies;
