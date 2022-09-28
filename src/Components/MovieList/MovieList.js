import React, { useEffect } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;

const MovieList = ({ movies, favoriteComponent, handleFavorites }) => {
  const FavoriteComponent = favoriteComponent;

  // const fetchPlot = function(movie){
  //   fetch(`http://www.omdbapi.com/?t=${movie.Title}&apikey=${API_KEY}`).then(
  //     (response) => response.json().then((data) => console.log(data))
  //   );
  //   return (
  //     <div>
  //       {movie.Plot}
  //     </div>
  //   )
  // }

  return (
    <div className="container">
      {movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m3"
          key={movie.imdbID}
        >
          <img src={movie.Poster} alt="movie poster" />
          <h5>
            Title : {movie.Title}
            <p>Release Year : {movie.Year}</p>
          </h5>
          <br></br>
          <div
            onClick={() => handleFavorites(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
