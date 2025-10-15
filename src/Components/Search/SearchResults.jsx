// import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axiosInstance from "../../AxiosInstance";
// import { useSelector } from "react-redux";
import { ThemeContext } from "../../context/theme";

export default function SearchResults() {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const API_KEY = "d4b6bc723ac291b078823a9b64bd3e08";
  useEffect(() => {
    axiosInstance
      .get(`/search/movie?api_key=${API_KEY}&query=${query}`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [query]);

  // const theme = useSelector((state) => state.theme.mode);
  const { mode: theme } = useContext(ThemeContext);

  const handleBackToMovies = () => navigate(`/movies`);
  const handleback = () => navigate(-1);
  return (
    <div
      className={`pt-24 px-6 sm:px-10 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }  min-h-screen `}
    >
      <div className="flex  items-center gap-2 text-gray-300 mb-8 text-sm">
        <button
          onClick={handleBackToMovies}
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
          <span>Movies</span>
        </button>

        <span className="text-gray-500">/</span>

        <button
          onClick={handleback}
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
          <span>Back</span>
        </button>

        <span className="text-gray-500">/</span>
        <span className="text-blue-400 font-medium truncate max-w-[200px]">
          {/* {movies?.title || "Search"} */}
          {query || "Search"}
        </span>
      </div>

      <h2 className="text-2xl font-semibold mb-8">
        Results for <span className="text-blue-400">"{query}"</span>
      </h2>

      {movies.length === 0 ? (
        <p className="text-gray-400 text-lg">No movies found</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-blue-900/30 transition-transform duration-300"
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="h-72 bg-gray-700 flex items-center justify-center text-gray-400 text-sm">
                  No Image
                </div>
              )}

              <div className="p-3">
                <h3 className="text-base font-semibold truncate">
                  {movie.title}
                </h3>
                {movie.release_date && (
                  <p className="text-gray-400 text-sm mt-1">
                    {new Date(movie.release_date).getFullYear()}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
