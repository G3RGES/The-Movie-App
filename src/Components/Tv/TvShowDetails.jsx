import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../AxiosInstance";

const TvShowDetails = () => {
  const imageBase = "https://image.tmdb.org/t/p/original";
  const API_KEY = "d4b6bc723ac291b078823a9b64bd3e08";
  const { id } = useParams();
  const [show, setShow] = useState({});
  const navigate = useNavigate();
  console.log(show);

  useEffect(() => {
    axiosInstance
      .get(`/tv/${id}?api_key=${API_KEY}`)
      .then((res) => {
        setShow(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleBackToTv = () => navigate(`/tv`);

  const handleBack = () => navigate(-1);

  if (!show) return <div className="text-white ">Loading...</div>;

  return (
    <div className="relative w-full rounded-lg min-h-screen text-white">
      {/* Backdrop */}
      {show.backdrop_path && (
        <div
          className="absolute rounded-lg inset-0 bg-cover bg-center filter brightness-50"
          style={{ backgroundImage: `url(${imageBase}${show.backdrop_path})` }}
        ></div>
      )}

      {/* Main content */}
      <div className="relative container mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 items-start">
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
            <span>Shows</span>
          </button>

          <span className="text-gray-500">/</span>
          <span className="text-blue-400 font-medium truncate max-w-[200px]">
            {show?.name || "Details"}
          </span>
        </div>
        {/* Poster */}
        <div className="w-full md:w-1/3 flex-shrink-0 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <img
            src={
              show.poster_path
                ? `${imageBase}${show.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={show.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            {show.name}
          </h1>

          <div className="flex flex-wrap gap-4 text-gray-300">
            {show.first_air_date && (
              <span className="px-2 py-1 bg-blue-600 rounded-lg">
                {new Date(show.first_air_date).getFullYear()}
              </span>
            )}
            {show.vote_average && (
              <span className="px-2 py-1 bg-yellow-500 rounded-lg text-black">
                ★ {show.vote_average}
              </span>
            )}
            {show.number_of_seasons && (
              <span className="px-2 py-1 bg-green-600 rounded-lg">
                {show.number_of_seasons} Seasons
              </span>
            )}
          </div>

          <p className="text-gray-200 mt-4 line-clamp-6">{show.overview}</p>

          {/* Genres */}
          {show.genres && show.genres.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {show.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href={show.homepage || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Visit Official Page
            </a>
            <button
              onClick={handleBackToTv}
              className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShowDetails;
