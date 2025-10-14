import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { changeLang } from "../../store/LangSlice";
import { toggleThemeMode } from "../../store/themeSlice";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useSelector((state) => state.theme.mode);
  const lang = useSelector((state) => state.lang.lang);

  const dispatch = useDispatch();

  const setLang = () => {
    dispatch(changeLang(lang === "en" ? "ar" : "en"));
  };

  const toggleTheme = () => {
    dispatch(toggleThemeMode());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`movies/search/${query}`);
    setQuery("");
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-50">
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-blue-500">
          The Movie App
        </h1>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
                : "hover:text-blue-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
                : "hover:text-blue-400 transition"
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/tv"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
                : "hover:text-blue-400 transition"
            }
          >
            Shows
          </NavLink>
        </div>

        <div className="hidden md:flex gap-8">
          <button
            onClick={() => setLang(lang)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded"
          >
            {lang === "en" ? "EN" : "AR"}
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 px-4 py-1 rounded">
            {theme === "light" ? "Light" : "Dark"}
          </button>
        </div>

        {/* Desktop search */}
        <div className="hidden md:flex items-center bg-gray-800 rounded-lg px-3 py-1">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent outline-none text-sm text-gray-300 placeholder-gray-500 w-32 focus:w-48 transition-all"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 104.5 17 6.5 6.5 0 0017 10.5z"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Burger menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4 border-t border-gray-700">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-400 font-semibold"
                : "block hover:text-blue-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-400 font-semibold"
                : "block hover:text-blue-400"
            }
          >
            Movies
          </NavLink>

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-gray-700 text-gray-200 placeholder-gray-400 rounded-lg w-full px-3 py-2 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 104.5 17 6.5 6.5 0 0017 10.5z"
                />
              </svg>
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}
