import React from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ id, title, overview, poster_path }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <li className="bg-transparent p-4 rounded-lg shadow-md ">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        loading="lazy"
        className=""
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-700 overflow-hidden text-ellipsis line-clamp-5">
        {overview}
      </p>
      <button
        className="hover:bg-[#3C467B] bg-[#134686] transition duration-350 
         text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleNavigate}
      >
        View Details
      </button>
    </li>
  );
};

export default Movie;
