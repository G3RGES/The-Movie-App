import React from "react";
import { useNavigate } from "react-router-dom";
import { addFavourite } from "../../store/FavouriteSlice";
import { useDispatch } from "react-redux";

const Movie = ({ id, title, overview, poster_path, movie }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/movies/${id}`);
  };
  const dispatch = useDispatch();
  const movieData = { id, title, overview, poster_path };

  const addToFavourite = () => {
    console.log(movieData);

    dispatch(addFavourite(movieData));
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
      <div className=" flex flex-row-reverse justify-center items-center h-full w-full gap-2">
        <button
          onClick={() => addToFavourite(movie)}
          className="bg-transparent mt-4  p-2 rounded-full hover:bg-[#3C467B] transition"
        >
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="yellow"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.8 8.25a6 6 0 00-9.8-6.9 6 6 0 00-9.8 6.9c3.1 5.5 9.8 11.2 9.8 11.2s6.7-5.7 9.8-11.2z"
          />
        </svg> */}
          ❤️
        </button>
        <button
          onClick={handleNavigate}
          className="hover:bg-[#3C467B] bg-[#134686] transition-all duration-300 
               text-white font-semibold py-2 px-4 rounded-lg mt-4 
               w-full text-center"
        >
          View Details
        </button>
      </div>
    </li>
  );
};

export default Movie;
