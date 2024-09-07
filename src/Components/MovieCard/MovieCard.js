import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, poster_path, overview, vote_average, release_date } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="movie-card max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={posterUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{overview.substring(0, 100)}...</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rating: {vote_average}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Release Date: {release_date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
