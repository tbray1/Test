import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.posterurl} alt="" />
      <h1>{movie.title}</h1>
      <p>{movie.plot}</p>
    </div>
  );
};

export default MovieItem;
