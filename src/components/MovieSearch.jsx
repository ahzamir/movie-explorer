import React, { useEffect, useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import FavoritesList from "./FavoritesList";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchTopMovies();
  }, []);

  // Assynchronos
  const fetchTopMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=top&type=movie&apikey=4f2f2439`
    );
    const data = await response.json();
    setMovies(data.Search.slice(0, 10)); // Top 10 Movies
  };

  const searchMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=4f2f2439`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const addFavorite = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((movie) => movie.imdbID !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header title={"Movie Explorer"} />
      <div className="w-full mx-auto">
        <SearchBar
          query={query}
          setQuery={setQuery}
          searchMovies={searchMovies}
        />
        <MovieList movies={movies} addFavorite={addFavorite} />
      </div>
      {favorites.length > 0 && (
        <FavoritesList favorites={favorites} removeFavorite={removeFavorite} />
      )}
    </div>
  );
};

export default MovieSearch;
