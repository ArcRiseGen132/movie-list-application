import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import MovieListHeading from "./Components/MovieListHeading/MovieListHeading";
import Searchbox from "./Components/Searchbox/Searchbox";
import AddFavorites from "./Components/AddFavorites/AddFavorites";
import RemoveFavorites from "./Components/RemoveFavorites/RemoveFavorites";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  const getMovieRequest = async (searchTerm) => {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;
    const response = await fetch(url).then((response) => response.json());
    if (response.Search) {
      setMovies(response.Search);
    }
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem(
      "movie-list-application-favorites",
      JSON.stringify(items)
    );
  };

  useEffect(() => {
    getMovieRequest(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("movie-list-application-favorites")
    );

    if (movieFavourites) {
      setFavorites(movieFavourites);
    }
  }, []);

  const AddFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
    console.log(newFavoriteList);
    console.log(movie);
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <Searchbox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavorites={AddFavoriteMovie}
          favoriteComponent={AddFavorites}
        />
      </div>
      <div className="row d-flex align-items center mt-4 mb-4">
        <MovieListHeading heading="Favorites" />
      </div>
      <div className="row">
        <MovieList
          movies={favorites}
          handleFavorites={removeFavoriteMovie}
          favoriteComponent={RemoveFavorites}
        />
      </div>
    </div>
  );
}

export default App;
