import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const API_KEY = "d4b6bc723ac291b078823a9b64bd3e08";
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [heroIndex, setHeroIndex] = useState(0);

  // Fetch data once
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popularRes, trendingRes, upcomingRes] = await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
          ),
          axios.get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
          ),
          axios.get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
          ),
        ]);

        setPopular(popularRes.data.results.slice(0, 5)); // only first 5 for hero
        setTrending(trendingRes.data.results.slice(0, 10));
        setUpcoming(upcomingRes.data.results.slice(0, 10));
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, []);

  // Hero auto-change
  useEffect(() => {
    if (popular.length === 0) return;
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % popular.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [popular]);

  const heroMovie = popular[heroIndex];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {heroMovie && (
        <div
          className="relative h-[80vh] flex items-end justify-start bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${heroMovie.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
          <div className="relative p-10 max-w-2xl z-10">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              {heroMovie.title}
            </h1>
            <p className="text-gray-300 mb-6 line-clamp-3">
              {heroMovie.overview}
            </p>
            <Link
              to={`/movies/${heroMovie.id}`}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold text-sm"
            >
              View Details
            </Link>
          </div>
          <div className="absolute bottom-6 right-8 flex gap-2">
            {popular.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full ${
                  idx === heroIndex ? "bg-blue-500" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <Section title="Trending This Week" movies={trending} />
      <Section title="Coming Soon" movies={upcoming} />
    </div>
  );
}

function Section({ title, movies }) {
  return (
    <div className="px-8 py-10">
      <h2 className="text-2xl font-semibold mb-5">{title}</h2>
      <div className="relative">
        {/* gradient edges */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>

        <div className="flex gap-5 overflow-x-auto scrollbar-horizontal  scroll-smooth pb-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-none w-52 bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-3">
                <h2 className="text-sm font-semibold truncate">
                  {movie.title}
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  {movie.release_date?.split("-")[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
