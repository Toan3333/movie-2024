import React from "react";
import Heading from "../heading/Heading";
import MovieList from "../movie/MovieList";

const TvShow = () => {
  return (
    <div>
      <div className="mt-16 mb-16">
        <div className="container">
          <Heading>Tv Show</Heading>
          <MovieList type="airing_today" genre="tv"></MovieList>
        </div>
      </div>
    </div>
  );
};

export default TvShow;
