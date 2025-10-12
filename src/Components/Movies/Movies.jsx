import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Movies = () => {
  const API_KEY = "d4b6bc723ac291b078823a9b64bd3e08";

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const total_pages = 20;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data);

        // setTotalPages(Math.min(res.data.total_pages, 20));
        setTotalPages(total_pages);
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
    <div className="container mx-auto my-auto p-6 mt-10 bg-[#132440] text-white shadow-md">
      <h1 className="text-4xl font-bold mb-5">Popular Movies</h1>
      <ul className="grid grid-cols-4 gap-4">
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

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-40"
        >
          {"<<"}
        </button>

        <span className="text-lg font-medium">
          Page {page} of {total_pages}
        </span>

        <button
          onClick={nextPage}
          disabled={page === total_pages}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-40"
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default Movies;
