import React from "react";
import { useNavigate } from "react-router-dom";

const TvShow = ({ id, title, overview, poster_path }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/tv/${id}`);
  };

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <li
      key={id}
      className="relative w-48 h-72 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer group"
      onClick={handleNavigate}
    >
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute bottom-0 p-4 text-white group-hover:translate-y-0 translate-y-12 transition-transform duration-300">
        <h2 className="text-lg font-bold truncate">{title}</h2>
        <p className="text-sm mt-1 line-clamp-3">{overview}</p>
      </div>
    </li>
  );
};

export default TvShow;
