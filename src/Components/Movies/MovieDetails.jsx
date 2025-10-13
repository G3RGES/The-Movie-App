// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../AxiosInstance";

const MovieDetails = ({ movies }) => {
  const API_KEY = "d4b6bc723ac291b078823a9b64bd3e08";
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    axiosInstance
      .get(`/movie/${id}?api_key=${API_KEY}`)
      .then((res) => {
        setMovie(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const navigate = useNavigate();

  const currentIndex = movies?.findIndex((m) => m.id === Number(id));

  const goPrev = () => {
    if (currentIndex > 0) {
      const prevId = movies[currentIndex - 1].id;
      navigate(`/movies/${prevId}`);
    }
  };

  const goNext = () => {
    if (currentIndex < movies.length - 1) {
      const nextId = movies[currentIndex + 1].id;
      navigate(`/movies/${nextId}`);
    }
  };

  const handleBack = () => navigate(`/movies`);

  if (!movie) return <div className="text-white ">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-6">
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
          <span>Movies</span>
        </button>

        <span className="text-gray-500">/</span>
        <span className="text-blue-400 font-medium truncate max-w-[200px]">
          {movie?.title || "Details"}
        </span>
      </div>
      <div className="max-w-5xl w-full bg-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-2/3 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3">{movie.title}</h1>
            <p className="text-gray-400 text-sm mb-6">
              {movie.release_date?.split("-")[0]} • {movie.runtime} min •{" "}
              {movie.genres?.map((g) => g.name).join(", ")}
            </p>

            <p className="leading-relaxed mb-6">{movie.overview}</p>

            <div className="flex items-center flex-wrap gap-3 mb-4">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full font-bold text-sm">
                ★ {movie.vote_average?.toFixed(1)}
              </span>
              <span className="text-gray-400 text-sm">
                {movie.vote_count} votes
              </span>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-md font-semibold"
            >
              View on TMDB
            </a>

            {movie.homepage && (
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-500 hover:bg-blue-500 hover:text-white transition px-5 py-2 rounded-md font-semibold"
              >
                Official Site
              </a>
            )}
          </div>
          <div className="flex justify-between w-full mt-8">
            <button
              onClick={goPrev}
              //   disabled={currentIndex === 0}
              className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-40"
            >
              Previous
            </button>

            <button
              onClick={goNext}
              //   disabled={currentIndex === movies.length - 1}
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
