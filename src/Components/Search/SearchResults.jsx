import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SearchResults() {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const API_KEY = "d4b6bc723ac291b078823a9b64bd3e08";
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div className="pt-24 px-8 bg-gray-900 min-h-screen text-white">
      <h2 className="text-2xl font-semibold mb-6">Results for "{query}"</h2>
      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition"
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded mb-2"
                />
              ) : (
                <div className="h-72 bg-gray-700 flex items-center justify-center">
                  No Image
                </div>
              )}
              <h3 className="text-center font-medium">{movie.title}</h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
