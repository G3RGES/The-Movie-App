import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Movies = () => {
  const API_KEY = "d4b6bc723ac291b078823a9b64bd3e08";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => {
        setMovies(res.data.results);
        // console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    </div>
  );
};

export default Movies;
