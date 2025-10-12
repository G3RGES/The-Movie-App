import React from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ id, title, overview, poster_path }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <li
      className="bg-[#0f1c33] p-4 rounded-xl shadow-lg 
             hover:shadow-2xl transition-all duration-300 
             flex flex-col justify-between w-full max-w-xs"
    >
      <div>
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            loading="lazy"
            className="w-full h-72 object-cover rounded-lg 
                   hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h2 className="text-xl font-bold mt-3 mb-1 text-center truncate">
          {title}
        </h2>

        <p
          className="text-sm text-gray-300 text-center 
                 mt-2 overflow-hidden text-ellipsis line-clamp-4 leading-relaxed"
        >
          {overview}
        </p>
      </div>

      <button
        onClick={handleNavigate}
        className="hover:bg-[#3C467B] bg-[#134686] transition-all duration-300 
               text-white font-semibold py-2 px-4 rounded-lg mt-4 
               w-full text-center"
      >
        View Details
      </button>
    </li>
  );
};

export default Movie;
