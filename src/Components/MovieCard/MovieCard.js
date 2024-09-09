import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, poster_path, overview, vote_average, release_date } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
   return (  
   <>
   <div className="movie-card">
  <img className="movieImage" src={posterUrl} alt={title} />
  <div className="movieDesc">
    <div className="movieTitle">{title}</div>
    <p className="movieOvrview">{overview.substring(0, 100)}...</p>
  </div>
  <div className="movieDetails">
    <span className="rating">⭐ {vote_average}</span>
    <span className="releaseDate">{release_date}</span>
  </div>
</div>
   </>
  );  
};
export default MovieCard;
// return (

  //   // <div className="movie-card">
  //   //   <img className="movieImage" src={posterUrl} alt={title} />
  //   //   <div className="movieDesc">
  //   //     <div className="movieTitle">{title}</div>
  //   //     <p className="movieOvrview">{overview.substring(0, 100)}...</p>
  //   //   </div>
  //   //   <div className="movieDetails">
  //   //     <span className="rating">Rating: {vote_average}</span>
  //   //     <span className="releaseDate">Release Date: {release_date}</span>
  //   //   </div>
  //   // </div>
  // );