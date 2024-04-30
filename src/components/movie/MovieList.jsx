import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import axios from "axios";

import "swiper/scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const MovieList = ({ type = "popular", genre = "movie" }) => {
  const [popularMovie, setPopularMovie] = useState([]);
  useEffect(() => {
    const getMoviePolular = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${genre}/${type}?api_key=e9d95f64abbe23c41e8c99c95dd78be9`
      );
      const data = response.data.results;
      setPopularMovie(data);
    };
    getMoviePolular();
  }, []);
  return (
    <div className="movie-list mt-8">
      <Swiper
        grabCursor={"true"}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={"auto"}>
        {popularMovie.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieItem item={item}></MovieItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
