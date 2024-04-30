import React, { Fragment, useEffect, useState } from "react";
import Header from "../layout/Header";
import CastList from "../cast/CastList";
import Heading from "../heading/Heading";
import MovieList from "../movie/MovieList";
import Footer from "../layout/Footer";

import axios from "axios";
import { useParams } from "react-router-dom";
import MovieItem from "../movie/MovieItem";
import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=e9d95f64abbe23c41e8c99c95dd78be9`
        );
        const data = response.data;
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    getMovieDetail();
  }, [movieId]);

  // Kiểm tra xem dữ liệu đã tải xong chưa
  if (!movieData) {
    return <div>Loading...</div>;
  }

  // Truy cập các thuộc tính của movieData
  const {
    backdrop_path,
    poster_path,
    title,
    genres,
    overview,
    original_language,
    release_date,
    spoken_languages,
  } = movieData;

  return (
    <Fragment>
      <Header></Header>
      <div className="w-full text-white relative mb-8">
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          className="w-full h-[500px] object-cover"
          alt="movie-img"
        />
        <div className="absolute bg-dry top-0 left-0 w-full h-full bg-opacity-85">
          <div className="container">
            <div className="flex gap-8">
              <div className="max-w-[395px] border border-gray-700 rounded">
                <img
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  className="w-full h-[558px] object-cover"
                  alt="movie-img"
                />
              </div>
              <div className="flex flex-col gap-10 mt-8 max-w-[500px]">
                <h1 className="text-4xl font-bold capitalize">{title}</h1>
                <div className="flex items-center  gap-4 text-dryGray">
                  <div className="bg-subMain p-1 text-sm">HD 4K</div>
                  <div className="flex items-center gap-4">
                    {genres.slice(0, 2).map((genre, index) => (
                      <span key={index} className="text-sm text-gray-400">
                        {genre.name}
                      </span>
                    ))}
                    <span className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-subMain">
                        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                        <path
                          fillRule="evenodd"
                          d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {release_date}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-7">{overview}</p>
                <div className="p-6 bg-main border border-gray-800 rounded-lg">
                  <div className="flex items-center gap-7">
                    <div className="">Language : {spoken_languages[0].name}</div>
                    <button className="bg-dry py-3 px-9 hover:bg-subMain transitions  rounded-full flex gap-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6">
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Watch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video mt-5">
        <MovieVideos movieId={movieId} />
      </div>
      <div className="mb-10">
        <div className="container">
          <div className="mt-8 mb-8">
            <h2 className="mt-20 text-3xl text-white mb-8">Cast</h2>
            <CastList></CastList>
          </div>
          <Heading>Related Movies</Heading>
          <div className="">
            <MovieSimilars movieId={movieId}></MovieSimilars>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};
// api videos: https://api.themoviedb.org/3/movie/1011985/videos?api_key=e9d95f64abbe23c41e8c99c95dd78be9
function MovieVideos({ movieId }) {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const getDataVideo = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=e9d95f64abbe23c41e8c99c95dd78be9`
        );
        const data = response.data.results;
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    getDataVideo();
  }, [movieId]);

  return (
    <div className="container">
      <div className="py-10">
        <div className="flex flex-col gap-10">
          {videos &&
            videos.slice(0, 2).map((item) => (
              <div className="mt-8" key={item.id}>
                <h3 className="mb-5 text-xl font-medium p-3 bg-subMain text-white inline-block">
                  {item.name}
                </h3>
                <div key={item.id} className="w-full aspect-video">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    title={item.name}
                    frameBorder="0"
                    className="w-full h-full object-fill"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

// api similar movies: https://api.themoviedb.org/3/movie/1011985/similar?api_key=e9d95f64abbe23c41e8c99c95dd78be9

function MovieSimilars({ movieId }) {
  const [movieSimilar, setMovieSimilar] = useState(null);

  useEffect(() => {
    const getMovieSimilar = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=e9d95f64abbe23c41e8c99c95dd78be9`
        );
        const data = response.data.results;
        console.log("similar", data);
        setMovieSimilar(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    getMovieSimilar();
  }, [movieId]);
  return (
    <div className="py-10">
      <h2 className="text-3xl font-medium mb-10 text-white">Similar movies</h2>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movieSimilar &&
            movieSimilar.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieItem item={item}></MovieItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
export default MovieDetailPage;
