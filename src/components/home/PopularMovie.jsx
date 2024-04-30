import React from "react";
import Heading from "../heading/Heading";
import MovieList from "../movie/MovieList";

const PopularMovie = () => {
  return (
    <div className="mt-16 mb-16">
      <div className="container">
        <Heading>Popular</Heading>
        <MovieList></MovieList>
      </div>
    </div>
  );
};

export default PopularMovie;
