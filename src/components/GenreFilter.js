import React from "react";

import { Select } from "antd";

const GenreFilter = ({ filterMovies, unFilteredMovies }) => {
  console.log();

  //get all the genres from movies
  const options = unFilteredMovies.map((movie) => movie.genre);
  //remove duplicates using set and convert set to array
  const unique = [...new Set(options)];
  console.log(unique);

  return (
    <div>
      <Select
        style={{ width: 120 }}
        onSelect={filterMovies}
        placeholder="...Select"
      >
        {unique.map((genre, id) => (
          <Select.Option key={id} value={genre}>
            {genre}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default GenreFilter;
