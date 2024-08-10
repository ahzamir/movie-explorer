import React from "react";

const FavoritesList = ({ favorites, removeFavorite }) => {
  return (
    <div className="mt-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-blue-500 mb-4">Favorite Movies</h2>
      <ul className="space-y-4">
        {favorites.map((movie) => (
          <li
            key={movie.imdbID}
            className="bg-white rounded-lg shadow-lg p-4 justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-bold">{movie.Title}</h3>
              <p className="text-gray-600">{movie.Year}</p>
            </div>
            <button
              onClick={() => removeFavorite(movie.imdbID)}
              className="bg-red-500 text-white px-4 py-1 rounded-md"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
