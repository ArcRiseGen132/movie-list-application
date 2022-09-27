import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import MovieListHeading from "./Components/MovieListHeading/MovieListHeading";
import Searchbox from "./Components/Searchbox/Searchbox";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  // const [movies, setMovies] = useState([]);

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovieRequest = async (searchTerm) => {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;
    const response = await fetch(url).then((response) => response.json());
    if (response.Search) {
      setMovies(response.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchTerm);
  }, [searchTerm]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <Searchbox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
