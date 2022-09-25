import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m3">
          <img src={movie.Poster} alt="movie poster" />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
