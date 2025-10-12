import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Movies from "./Components/Movies/Movies";
import MovieDetails from "./Components/Movies/MovieDetails";
import SearchResults from "./Components/Search/SearchResults";

import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "movies/:id", element: <MovieDetails /> },
      { path: "movies/search/:query", element: <SearchResults /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
