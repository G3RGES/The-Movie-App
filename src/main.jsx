import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import Movies, {
  ErrorBoundary,
  moviesLoader,
} from "./Components/Movies/Movies";
import MovieDetails from "./Components/Movies/MovieDetails";
import SearchResults from "./Components/Search/SearchResults";

import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import store from "./store/store";
import TvShows, { tvShowsLoader } from "./Components/Tv/TvShows";
import TvShowDetails from "./Components/Tv/TvShowDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "movies",
        element: <Movies />,
        loader: moviesLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "tv",
        element: <TvShows />,
        loader: tvShowsLoader,
        errorElement: <ErrorBoundary />,
      },
      { path: "tv/:id", element: <TvShowDetails /> },
      { path: "movies/:id", element: <MovieDetails /> },
      { path: "movies/search/:query", element: <SearchResults /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
