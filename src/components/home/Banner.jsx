import React, { useEffect } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../button/Button";
import { useState } from "react";
import axios from "axios";

// https://api.themoviedb.org/3/movie/upcoming?api_key=e9d95f64abbe23c41e8c99c95dd78be9
const Banner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    const getBanner = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=e9d95f64abbe23c41e8c99c95dd78be9"
      );
      const data = response.data.results;
      setBanner(data);
    };
    getBanner();
  }, []);
  return (
    <div className="relative w-full">
      <div className="container overflow-hidden">
        <Swiper
          direction="vertical"
          speed={2000}
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          className="w-full xl:h-96 bg-dry lg:h-64 h-48"
          autoplay={{ delay: 4000, disableOnInteraction: false }}>
          {banner.slice(0, 6).map((item) => (
            <SwiperSlide key={item.id} className="relative rounded">
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

function BannerItem({ item }) {
  const { poster_path, title, release_date, overview } = item;
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="banner"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute linear-bg pl-40 top-0 bottom-0 right-0 left-0 flex flex-col justify-center gap-8 max-w-[800px]">
        <h1 className="text-4xl font-bold truncate capitalize text-white">{title}</h1>
        <div className="flex items-center gap-5 text-dryGray">
          <span>Wester</span>
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
        <p className="text-white leading-6 text-sm">{overview}</p>
        <div className="flex items-center gap-5">
          <Button></Button>
          <div className="bg-white bg-opacity-30 px-4 py-3 rounded text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white hover:text-subMain cursor-pointer">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
