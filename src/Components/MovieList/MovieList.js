import React from "react";

const MovieList = ({ movies, favoriteComponent, handleFavorites }) => {
  const FavoriteComponent = favoriteComponent;
  return (
    <div className="container">
      {movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m3"
          key={movie.imdbID}
        >
          <img src={movie.Poster} alt="movie poster" />
          <div
            onClick={() => handleFavorites(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavoriteComponent/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
