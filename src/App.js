import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Movies from "./components/Movies";
import "antd/dist/antd.css";
import GenreFilter from "./components/GenreFilter";
import { Button } from "antd";

function App() {
  const [movies, setMovies] = useState([]);
  const [unFilteredMovies, setUnfilteredMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("/movies");
      setMovies(result.data.data.movies);
      setUnfilteredMovies(result.data.data.movies);
    };

    fetchItems();
  }, []);

  const filterMovies = (e) => {
    console.log(e);
    if (e !== "") {
      const filtered = unFilteredMovies.filter((movie) => movie.genre === e);
      console.log(filtered);
      setPageNumber(0);
      setMovies(filtered);
    }
  };
  const resetFilter = () => {
    setMovies(unFilteredMovies);
  };
  return (
    <div className="container">
      <GenreFilter
        filterMovies={filterMovies}
        unFilteredMovies={unFilteredMovies}
      />
      <Button onClick={resetFilter}>Reset</Button>
      <Movies
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        movies={movies}
      />
    </div>
  );
}

export default App;
