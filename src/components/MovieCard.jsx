import React from "react";

const MovieCard = ({ movie, addFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
      <img
        src={movie.Poster}
        alt={movie.title}
        className="rounded-md mb-4 w-full"
      />
      <div className="text-center">
        <h2 className="text-lg font-bold">{movie.Title}</h2>
        <p className="text-gray-900">{movie.Year}</p>
        <button
          onClick={() => addFavorite(movie)}
          className="mt-2 bg-green-500 text-white px-4 py-1 rounded-md"
        >
          Add To Favorites
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
