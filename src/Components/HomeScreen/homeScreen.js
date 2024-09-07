import React, { useEffect, useState } from 'react'

import FetchPopularMovies from '../../TMDB_Services/tmdbServices';
import MovieCard from '../MovieCard/MovieCard';




const HomeScreen = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await FetchPopularMovies();
      setMovies(movieData);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="App container bg-black mx-auto px-4 ">
      <h1 className="text-4xl font-bold text-center my-8">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
    </>
  )
}

export default HomeScreen;