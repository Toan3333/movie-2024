import React from "react";
import Heading from "../heading/Heading";
import MovieList from "../movie/MovieList";

const TrendingMovie = () => {
  return (
    <div className="mt-16 mb-16">
      <div className="container">
        <Heading>Top Rated</Heading>
        <MovieList type="top_rated"></MovieList>
      </div>
    </div>
  );
};

export default TrendingMovie;
