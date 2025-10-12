import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Movies = () => {
  const API_KEY = "d4b6bc723ac291b078823a9b64bd3e08";

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const total_pages = 20;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
      )
      .then((res) => {
        setMovies(res.data.results);
        // console.log(res.data);

        // console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const nextPage = () => {
    if (page < total_pages) setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div className="container mx-auto p-6 mt-10 bg-[#132440] text-white shadow-md rounded-xl">
      <h1 className="text-4xl font-bold mb-8 text-center tracking-tight">
        Popular Movies
      </h1>

      {/* Grid */}
      <ul
        className="grid gap-6 
                 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                 place-items-center"
      >
        {movies?.map(({ id, title, overview, poster_path }) => (
          <Movie
            movies={movies}
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

export default Movies;
