import React from "react";
import { useNavigate } from "react-router-dom";
import { addFavourite, removeFavourite } from "../../store/FavouriteSlice";
import { useDispatch, useSelector } from "react-redux";

const Movie = ({ id, title, overview, poster_path }) => {
  const navigate = useNavigate();
  const favourite = useSelector((state) => state.favourite);

  const isFavourite = favourite.movies.some((movie) => movie.id === id);

  // console.log(isFavourite);

  const handleNavigate = () => {
    navigate(`/movies/${id}`);
  };
  const dispatch = useDispatch();
  const movieData = { id, title, overview, poster_path };

  const addToFavourite = () => {
    console.log(movieData);

    dispatch(addFavourite(movieData));
  };

  const handleRemove = (id) => {
    dispatch(removeFavourite(id));
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
      <div
        className={` flex flex-row-reverse justify-center items-center h-full w-full gap-2`}
      >
        <button
          onClick={isFavourite ? () => handleRemove(id) : addToFavourite}
          className={`bg-transparent hover:bg-gray-900  mt-4  p-2 rounded-full  transition`}
        >
          {isFavourite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          )}
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
