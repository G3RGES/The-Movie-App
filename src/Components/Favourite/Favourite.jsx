import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavourite } from "../../store/FavouriteSlice";
import { ThemeContext } from "../../context/theme";

const Favourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourite.movies);
  // const theme = useSelector((state) => state.theme.mode);
  const { mode: theme } = useContext(ThemeContext);

  const handleRemove = (id) => {
    dispatch(removeFavourite(id));
  };

  if (favourites.length === 0)
    return (
      <div
        className={`container ${
          theme === "dark"
            ? "bg-[#132440] text-gray-300"
            : "text-black bg-gray-100"
        } mx-auto p-6 mt-10 text-center`}
      >
        <h1 className={"text-3xl font-bold mb-4"}>Your Favourites</h1>
        <p>No favourites added yet.</p>
      </div>
    );

  return (
    <div
      className={`container rounded-md ${
        theme === "dark"
          ? "bg-[#132440] text-gray-300"
          : "text-black bg-gray-100"
      } mx-auto p-6 mt-10 text-center`}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Your Favourites</h1>

      <ul
        className="grid gap-6 
                   grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                   place-items-center"
      >
        {favourites.map(({ id, title, name, poster_path }) => {
          const imageUrl = poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image";

          return (
            <li
              key={id}
              className="relative bg-[#1e2a3b] rounded-xl overflow-hidden w-48 shadow-lg group"
            >
              <img
                src={imageUrl}
                alt={title || name}
                className="w-full h-72 object-cover"
              />

              <div className="absolute top-2 right-2">
                <button
                  onClick={() => handleRemove(id)}
                  className="p-2 rounded-full bg-black/50 hover:bg-red-600 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
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
                  </svg>
                </button>
              </div>

              <div className="absolute bottom-0 w-full bg-black/60 p-3">
                <h2 className="text-sm font-semibold truncate text-center">
                  {title || name}
                </h2>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favourites;
