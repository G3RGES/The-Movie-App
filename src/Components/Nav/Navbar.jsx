import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { changeLang } from "../../store/LangSlice";
import { ThemeContext } from "../../context/theme";
import { userLogout } from "../../Services/auth";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mode: theme, toggleThemeMode } = useContext(ThemeContext);
  const lang = useSelector((state) => state.lang.lang);

  // Check if user is logged in - adjust this based on your auth state structure
  // const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn || false);

  const setLang = () => {
    dispatch(changeLang(lang === "en" ? "ar" : "en"));
  };

  const toggleTheme = () => {
    toggleThemeMode();
  };

  const userToken = localStorage.getItem("token");

  const handleLogout = async () => {
    // Put your logout logic here
    // console.log("Logout clicked");
    await userLogout();
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`movies/search/${query}`);
    setQuery("");
    setMenuOpen(false);
  };

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-md fixed  w-full top-0 z-50`}
    >
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide text-blue-500">
          The Movie App
        </h1>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row gap-8`}
        >
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
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
            onClick={() => setMenuOpen(false)}
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
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
                : "hover:text-blue-400 transition"
            }
          >
            Shows
          </NavLink>

          <NavLink
            to="/favourites"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
                : "hover:text-blue-400 transition"
            }
          >
            Favourites
          </NavLink>

          {userToken ? (
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-500 transition font-semibold"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/register"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-900 font-semibold shadow-md bg-white px-2 py-1 rounded-md pb-1"
                    : "hover:text-gray-400 transition shadow-md bg-transparent px-2 py-1 rounded-md"
                }
              >
                Register
              </NavLink>

              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-900 font-semibold shadow-md bg-white px-2 py-1 rounded-md pb-1"
                    : "hover:text-gray-400 transition shadow-md bg-transparent px-2 py-1 rounded-md"
                }
              >
                Login
              </NavLink>
            </>
          )}
        </div>

        <div className="hidden sm:flex gap-8">
          <button
            onClick={() => setLang(lang)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded"
          >
            {lang === "en" ? "EN" : "AR"}
          </button>

          <button
            onClick={toggleTheme}
            className={`${
              theme === "dark"
                ? "bg-transparent hover:bg-gray-800"
                : "bg-gray-100 hover:bg-gray-200"
            } px-4 py-1 rounded shadow-md`}
          >
            {theme === "light" ? "Light" : "Dark"}
          </button>
        </div>

        <div
          className={`hidden md:flex items-center ${
            theme === "dark" ? "bg-gray-800" : "bg-white text-gray-900"
          } shadow-md rounded-lg px-3 py-1`}
        >
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`bg-transparent outline-none text-sm ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }
               placeholder-gray-500 w-32 focus:w-48 transition-all`}
            />
            <button
              type="submit"
              className={`${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-900"
                  : "bg-white hover:bg-gray-100"
              } transition ease-in px-4 py-1 rounded text-sm`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className={`w-5 h-5 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-900"
                }`}
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

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7 ${
              theme === "dark" ? "text-gray-300" : "text-gray-900"
            }`}
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

      {menuOpen && (
        <div
          className={`md:hidden ${
            theme === "dark"
              ? "text-gray-200 bg-gray-800 border-gray-700"
              : "text-gray-900 bg-white border-gray-200"
          } px-6 py-4 space-y-4 border-t`}
        >
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

          <button
            onClick={toggleTheme}
            className={`w-full ${
              theme === "dark"
                ? "bg-transparent border border-gray-700 hover:bg-gray-700"
                : "bg-gray-100 border border-gray-300 hover:bg-gray-200"
            } px-4 py-2 rounded shadow-md text-sm`}
          >
            {theme === "light" ? "Light" : "Dark"}
          </button>
        </div>
      )}
    </nav>
  );
}
